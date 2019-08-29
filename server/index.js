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
  console.log('>>>Get item by ID');
  console.log('request path: ', req.path);
  console.log('Get item by ID: ', req.params);
  // const response = {name: 'item one', id: 1}
  let data = {}
  try {
    let response = await axios.get(`${ML_API}/items/${req.params.id}`);
    console.log('>>>get item response: ', response);
    if (response.status === 200) data = response.data;
  } catch (error) {
    console.error(error);
  }
  res.send(data);
});

router.get('/api/items\?*', async (req, res) => {
  console.log('>>>Search items');
  console.log('request path: ', req.path);
  console.log('request query: ', req.query);
  // const response = [{name: 'item one', id: 1}, {name: 'item two', id: 2}]
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
    console.log('>>>search sesponse: ', response);
    if (response.status === 200) {
      response.data.results.forEach(item => {
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
          'free_shipping': item.shipping.free_shipping
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
  console.log('API response: ', data);
  res.send(data);
});

router.get('*', async (req, res) => {
  console.log('>>>Static response');
  console.log('request path: ', req.path);
  console.log('request params: ', req.params);
  console.log('request query: ', req.query);

  const store = configureStore();
  console.log('before matchRoutes');
  const actions = matchRoutes(Routes, req.path)
  .map(({ route, match }) => route.component.fetching ? route.component.fetching({...store, params: match.params, query: req.query }) : null)
  .map(async actions => await Promise.all(
    (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    )
  );

  await  Promise.all(actions);
  const context = {};
  console.log('before rendered content');
  const content = render(req.path, store, context);
  console.log('rendered content: ', content);
  res.send(content);
});

app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));
app.use('/', router);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));