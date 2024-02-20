import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/home';
import Investors from './components/investors/investors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/investors',
    element: <Investors />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
