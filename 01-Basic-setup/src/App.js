import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';

// below all js object represent one route and some properties defined to the route characterstics
const router = createBrowserRouter([
  // element represent which component to load when path is acccessed
  { path: '/home', element: <HomePage/> },
  { path: '/products', element: <ProductPage/>},
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
