import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,  
} from '@tanstack/react-query'
import Root from './Component/Root/Root';
import Error from './Component/Root/Error';
import Home from './Component/Root/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import AuthProvider from './Component/Provider/AuthProvider';
import Confirm from './Component/Shared/Confirm';
import MyBooking from './Component/MyBookings/MyBooking';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/form/:id',
        element: <Form></Form>
      },
      {
        path: '/confirmed',
        element: <Confirm></Confirm>
      },
      {
        path: '/mybookings',
        element: <MyBooking></MyBooking>
      },
    ]
  },
// {
//     path: '/dashboard',
//     element: <Dashboard></Dashboard>,
//     children: [
//     {
//       path: "/dashboard",
//       element:
//     }
//   ]
//   }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
