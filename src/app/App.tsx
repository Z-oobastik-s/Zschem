import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { appRouter } from "@app/router";
import { AppProviders } from "@app/providers/AppProviders";

export const App = () => (
  <AppProviders>
    <Suspense
      fallback={
        <div className="app-loading">
          <span className="app-loading__core">Initializing Zschem</span>
        </div>
      }
    >
      <RouterProvider router={appRouter} />
    </Suspense>
  </AppProviders>
);
