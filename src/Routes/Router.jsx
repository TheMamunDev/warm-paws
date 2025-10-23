import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../component/Home/Home';
import Services from '../component/pages/Services';
import Spinner from '../component/Spinner';
import ServicesDetails from '../component/pages/ServicesDetails';
import LoginPage from '../component/AuthPage/LoginPAge';
import RegisterPage from '../component/AuthPage/RegisterPage';
import Profile from '../component/pages/Profile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ForgotPasswordPage from '../component/AuthPage/ForgetPassword';
import NotFound from '../component/NotFound';

export const router = createBrowserRouter([
  {
    path: '',
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        path: '',
        Component: Home,
        loader: async () => {
          const [petResult, sliderResult] = await Promise.all([
            fetch('../petData.json'),
            fetch('../sliderData.json'),
          ]);

          const [pets, sliders] = await Promise.all([
            petResult.json(),
            sliderResult.json(),
          ]);

          return { pets, sliders };
        },
        HydrateFallback: Spinner,
      },
      {
        path: 'services',
        Component: Services,
        loader: () => fetch('../petData.json'),
        HydrateFallback: Spinner,
      },
      {
        path: 'services-details/:id',
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('../petData.json'),
        HydrateFallback: Spinner,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage></ForgotPasswordPage>,
      },
    ],
  },
]);
