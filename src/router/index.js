import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import PostPage from '../pages/PostPage';
import PostListPage from '../pages/PostListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostListPage />,
  },
  // children: [
  // path: '/',
  // element: <App />,
  // children: [
  //     {
  //       index: true,
  //       path: '/posts',
  //       element: <PostListPage />,
  //     },
  //     {
  //       path: '/posts/:id',
  //       element: <PostPage />,
  //     },
  //     {
  //       path: '*',
  //       element: <Navigate to="/" />,
  //     },
  //   ],
  // },
  {
    path: '/:id',
    element: <PostPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export const PrivateRouterProvider = () => {
  return <RouterProvider router={router} />;
};
