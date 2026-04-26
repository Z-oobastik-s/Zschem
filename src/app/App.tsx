import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { appRouter } from "@app/router";
import { AppProviders } from "@app/providers/AppProviders";

const INTRO_DURATION_MS = 5000;
const INTRO_FADE_START_MS = 4300;

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIntroFading(true);
    }, INTRO_FADE_START_MS);

    const hideTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const handleIntroEnd = () => {
    setIntroFading(true);
    window.setTimeout(() => setShowIntro(false), 350);
  };

  return (
    <AppProviders>
      {showIntro && (
        <div className={`intro-overlay ${introFading ? "intro-overlay--fade" : ""}`}>
          <video
            className="intro-overlay__video"
            src={`${import.meta.env.BASE_URL}Video/intro.mp4`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleIntroEnd}
          />
        </div>
      )}
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
};
