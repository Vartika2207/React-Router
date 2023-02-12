import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// below all js object represent one route and some properties defined to the route characterstics
const router = createBrowserRouter([
  {
    // this route act as a parent and wrapper route
    path: '/',
    // here in rootLayout we define where these child route component ans elements should be rendered
    element: <RootLayout/>,
    // renders this below component if error encountered
    errorElement: <ErrorPage/>,
    // childern property takes array of more route definations
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/products', element: <ProductPage/>},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
