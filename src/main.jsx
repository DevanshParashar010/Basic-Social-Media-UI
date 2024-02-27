import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPage.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";
import MainMenu from "./Components/MainMenu.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      {
        path: "/MainMenu",
        element: <MainMenu />,
        children: [
          { path: "/MainMenu/createPost", element: <CreatePost /> },
          { path: "/MainMenu/Postlist", element: <PostList /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
