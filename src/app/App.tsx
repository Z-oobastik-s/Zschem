import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { appRouter } from "@app/router";
import { AppProviders } from "@app/providers/AppProviders";

const INTRO_DURATION_MS = 5000;
const INTRO_FADE_START_MS = 4650;
const INTRO_VIDEO_SRC = `${import.meta.env.BASE_URL}Video/intro.mp4?v=${__APP_BUILD_ID__}`;

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

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

  const applyIntroSound = async () => {
    const video = introVideoRef.current;
    if (!video) return;
    video.volume = 0.05;
    video.muted = false;
    try {
      await video.play();
      setSoundBlocked(false);
    } catch {
      video.muted = true;
      setSoundBlocked(true);
    }
  };

  const handleEnableSoundClick = async () => {
    const video = introVideoRef.current;
    if (!video) return;
    video.volume = 0.05;
    video.muted = false;
    await video.play();
    setSoundBlocked(false);
  };

  return (
    <AppProviders>
      {showIntro && (
        <div className={`intro-overlay ${introFading ? "intro-overlay--fade" : ""}`}>
          <video
            ref={introVideoRef}
            className="intro-overlay__video"
            src={INTRO_VIDEO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              void applyIntroSound();
            }}
          />
          {soundBlocked && (
            <button className="intro-overlay__sound-button" type="button" onClick={() => void handleEnableSoundClick()}>
              Enable sound 5%
            </button>
          )}
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
