import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allpages from "../../Pages/Allpages/Allpages/Allpages";
import Blog from "../../Pages/Allpages/Blog/Blog";
import FAQ from "../../Pages/Allpages/FAQ/FAQ";
import ContactPage from "../../Pages/Contact/ContactPage/ContactPage";
import HomePage from "../../Pages/Home/HomePage/HomePage";
import Login from "../../Pages/Login/Login";
import NewsFeedPage from "../../Pages/NewsFeed/NewsFeedPage/NewsFeedPage";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import ChangePassword from "../../Pages/Timeline/Profile/ChangePassword/ChangePassword";
import Profile from "../../Pages/Timeline/Profile/Profile";

import TimelinePage from "../../Pages/Timeline/TimelinePage/TimelinePage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/newsfeed",
        element: <NewsFeedPage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/allpages",
        element: <Allpages />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/changepassword",
        element: <Profile />,
      },
      {
        path: "/changepassword/change-password",
        element: <ChangePassword />,
      },
    ],
  },
]);

export default router;
