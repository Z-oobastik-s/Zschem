import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@config/routes";
import { lazy } from "react";

const HomePage = lazy(() => import("@pages/HomePage"));
const BuildDetailsPage = lazy(() => import("@pages/BuildDetailsPage"));

export const appRouter = createBrowserRouter(
  [
    {
      path: ROUTES.home,
      element: <HomePage />
    },
    {
      path: ROUTES.buildDetails,
      element: <BuildDetailsPage />
    }
  ],
  { basename: import.meta.env.BASE_URL }
);
