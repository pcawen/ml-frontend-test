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

router.get('/api/items/:id', (req, res) => {
  console.log('>>>Get item by ID');
  console.log('request path: ', req.path);
  console.log('Get item by ID: ', req.params);
  const response = {name: 'item one', id: 1}
  // const response = {}
  // try {
  //   response = await axios.get(`${ML_API}/sites/MLA/search?q=​${}`);
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
  res.send(response);
});

router.get('/api/items\?*', async (req, res) => {
  console.log('>>>Search items');
  console.log('request path: ', req.path);
  console.log('request query: ', req.query);
  const response = [{name: 'item one', id: 1}, {name: 'item two', id: 2}]
  res.send(response);
});

router.get('*', async (req, res) => {
  console.log('>>>Static response');
  console.log('request path: ', req.path);
  console.log('request params: ', req.params);
  console.log('request query: ', req.query);

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