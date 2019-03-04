import App from './components/App/App';
import Login from './pages/login/Login';
import HomePage from './pages/homepage/homepage.container';
import Detail from './pages/detail/detail.container';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      {
        path: '/hero/:heroId',
        exact: true,
        component: Detail,
      },
      {
        path: '/homepage',
        exact: true,
        component: HomePage,
      },
    ],
  },
];

export default routes;
