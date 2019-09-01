import express from 'express';
import { matchRoutes } from 'react-router-config';
import render from './render';
import configureStore from '../src/store';
import Routes from '../src/router/Routes';
import axios from 'axios';


const PORT = process.env.PORT || 3000;
const app = express();

var router = express.Router();

const ML_API = 'https://api.mercadolibre.com'

router.get('/api/items/:id', async (req, res) => {
  let data = {}
  try {
    let response = await axios.get(`${ML_API}/items/${req.params.id}`);
    if (response.status === 200) {
      let origItem = response.data;
      data = {
        'author': {
          'name': '',
          'lastname': ''
        },
        'item': {
          'id': origItem.id,
          'title': origItem.title,
          'price': {
            'currency': origItem.currency_id,
            'amount': Math.floor(origItem.price),
            'decimals': Math.floor((origItem.price - Math.floor(origItem.price))*100),
          },
          'picture': origItem.pictures[0].url,
          'condition': origItem.condition,
          'free_shipping': origItem.shipping.free_shipping,
          'sold_quantity': origItem.sold_quantity,
          'description': ''
        }
      };
      let cat = await axios.get(`${ML_API}/categories/${origItem.category_id}`);
      if (cat.status === 200) {
        data.categories = cat.data.path_from_root;
      }
    } 
    //TODO get description
    let desc = await axios.get(`${ML_API}/items/${req.params.id.trim()}/description`);
    if (desc.status === 200) {
      data.item.description = desc.data.plain_text;
    }
  } catch (error) {
    console.error(error);
  }
  res.send(data);
});

router.get('/api/items\?*', async (req, res) => {
  let data = {
    'author': {
      'name': '',
      'lastname': ''
    },
    categories: [],
    items: []
  };
  try {
    let response = await axios.get(`${ML_API}/sites/MLA/search?q=${req.query.q}`);
    if (response.status === 200) {
      for (let i = 0; i < 4; i++) {
        let item = response.data.results[i];
        data.items.push({
          'id': item.id,
          'title': item.title,
          'price': {
            'currency': item.currency_id,
            'amount': Math.floor(item.price),
            'decimals': Math.floor((item.price - Math.floor(item.price))*100) //A simpler solution could be .split(".") but can have errors if used a comma as the decimal separator
          },
          'picture': item.thumbnail,
          'condition': item.condition,
          'free_shipping': item.shipping.free_shipping,
          'state_name': item.address.state_name
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
  res.send(data);
});

router.get('*', async (req, res) => {
  const store = configureStore();
  const actions = matchRoutes(Routes, req.path)
  .map(({ route, match }) => route.component.fetching ? route.component.fetching({...store, params: match.params, query: req.query }) : null)
  .map(async actions => await Promise.all(
    (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    )
  );

  await  Promise.all(actions);
  const context = {};
  const content = render(req.path, store, context);
  res.send(content);
});

app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));
app.use('/', router);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));