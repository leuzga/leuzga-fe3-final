import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Detail = lazy(() => import('./Detail'));
const Favs = lazy(() => import('./Favs'));
const Contact = lazy(() => import('./Contact'));

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/detail/:id', name: 'Detail', Component: Detail },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/favs', name: 'Favs', Component: Favs },
];

export default routes;
