import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../component/Home/Home';
import Services from '../component/pages/Services';
import Spinner from '../component/Spinner';
import ServicesDetails from '../component/pages/ServicesDetails';
import LoginPage from '../component/AuthPage/LoginPage';
import RegisterPage from '../component/AuthPage/RegisterPage';
import Profile from '../component/pages/Profile/Profile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ForgotPasswordPage from '../component/AuthPage/ForgetPassword';
import NotFound from '../component/NotFound';
import Blogs from '../component/pages/Blogs/Blogs';
import Post from '../component/pages/Blogs/Post';
import About from '../component/pages/About/About';
import Contact from '../component/pages/Contact/Contact';

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
          const [petResult, sliderResult, testimonialsResult] =
            await Promise.all([
              fetch('/petData.json'),
              fetch('/sliderData.json'),
              fetch('/testimonialsData.json'),
            ]);
          const [pets, sliders, testimonials] = await Promise.all([
            petResult.json(),
            sliderResult.json(),
            testimonialsResult.json(),
          ]);

          return { pets, sliders, testimonials };
        },
        HydrateFallback: Spinner,
      },
      {
        path: 'services',
        Component: Services,
        loader: async () => {
          const res = await fetch('/petData.json');
          return res.json();
        },
        HydrateFallback: Spinner,
      },
      {
        path: 'services-details/:id',
        element: <ServicesDetails></ServicesDetails>,
        loader: async () => {
          const res = await fetch('/petData.json');
          const data = await res.json();
          return data;
        },
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
        path: 'blogs',
        Component: Blogs,
        loader: async () => {
          const res = await fetch('/blogs.json');
          return res.json();
        },
        HydrateFallback: Spinner,
      },
      {
        path: 'blogs/post/:id',
        Component: Post,
        loader: async ({ params }) => {
          const res = await fetch('/blogs.json');
          const data = await res.json();
          const post = data.find(p => p.id === Number(params.id));
          return post;
        },
        HydrateFallback: Spinner,
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
      {
        path: 'about',
        Component: () => <About></About>,
      },
      {
        path: 'contact',
        Component: () => <Contact></Contact>,
      },
    ],
  },
]);
