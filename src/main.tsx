import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import App from './App';
import Detail from './routes/Detail';
import Favorites from './routes/Favorites';
import Edit from './routes/Edit';
import { store } from './store';
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ':moviesId',
                element: <Detail />,
            },
            {
                path: '/movies',
                element: <Home />,
            },
            {
                path: '/movies/:moviesId',
                element: <Detail />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
            },
            {
                path: '/favorites/:moviesId',
                element: <Edit />,
            },
        ],
    },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
      </QueryClientProvider>
  </React.StrictMode>
)
