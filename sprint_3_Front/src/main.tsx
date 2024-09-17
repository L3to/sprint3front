import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Error from "./routes/Error/index.tsx";
import Home from "./routes/Home/index.tsx";
import NossaEquipe from "./routes/NossaEquipe/index.tsx";
import Login from "./routes/Login/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/nossaequipe", element: <NossaEquipe /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
