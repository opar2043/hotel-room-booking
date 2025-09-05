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
import Facilities from './Component/Facilites/Facilities';
import Service from './Component/Service/Service';
import RoomType from './Component/Room/RoomType';
import About from './Component/Root/About';
import AllBooking from './Component/Dashboard/AllBooking/AllBooking';
import RoomAdmin from './Component/Dashboard/RoomAdmin/RoomAdmin';
import User from './Component/Dashboard/User/User';
import Login from './Component/Provider/Login';
import Register from './Component/Provider/Register';

const queryClient = new QueryClient();


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
      {
        path: '/facilities',
        element: <Facilities></Facilities>
      },
      {
        path: '/services',
        element: <Service></Service>
      },
      {
        path: '/room',
        element: <RoomType></RoomType>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
{
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
    {
      path: "/dashboard/allbooking",
      element: <AllBooking></AllBooking>
    },
    {
      path: "/dashboard/room-admin",
      element: <RoomAdmin></RoomAdmin>
    },
    {
      path: "/dashboard/users",
      element: <User></User>
    },

  ]
  }
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
