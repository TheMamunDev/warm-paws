import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../component/Home/Home';
import Services from '../component/pages/Services';
import Spinner from '../component/Spinner';

export const router = createBrowserRouter([
  {
    path: '',
    Component: Root,
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
      },
    ],
  },
]);
