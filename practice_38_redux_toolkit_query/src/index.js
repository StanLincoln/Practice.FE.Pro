import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import PostsPage from "./pages/PostsPage";
import { store } from "./store/store";
import AmmunitionPage from "./pages/AmmunitionPage";
import PostDetailPage from "./components/PostDetailPage/PostDetailPage";
import NewPostPage from "./pages/NewPostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error page!</h2>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/feed",
        element: <PostsPage />,
      },
      {
        path: "/feed/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/weapons/:dwarfName",
        element: <AmmunitionPage />,
      },
      { path: "/new", element: <NewPostPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
