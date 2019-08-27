import SearchResult from '../components/SearchResult';
import ProductDetail from '../components/ProductDetail';

export default [
  {
    component: SearchResult,
    path: '/items',
    exact: true
  },
  {
    component: ProductDetail,
    path: '/items/:id',
    exact: true
  }
];