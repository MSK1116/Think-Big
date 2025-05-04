import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

const Donate_banner2 = () => {
  const bgVideo = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const handlePlay = () => {
    const vid = bgVideo.current;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleDuration = () => {
    const percent = (bgVideo.current.currentTime / bgVideo.current.duration) * 100;
    setDuration(percent);
  };

  useEffect(() => {
    const video = bgVideo.current;

    const handlePlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handleStalled = () => setIsLoading(true);
    const handleCanPlayThrough = () => setIsLoading(false);

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("waiting", handleWaiting);
      video.addEventListener("stalled", handleStalled);
      video.addEventListener("canplaythrough", handleCanPlayThrough);
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("waiting", handleWaiting);
        video.removeEventListener("stalled", handleStalled);
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
      }
    };
  }, []);

  return (
    <>
      <div className="  max-w-screen-2xl overflow-hidden w-full ">
        <div className="md:mt-14 mt-16  relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-slate-100 to-gray-200 bg-opacity-50">
              <div className="h-12 w-12 loader"></div>
            </div>
          )}
          <video onTimeUpdate={handleDuration} ref={bgVideo} className="w-full h-full outline-none inset-0 " autoPlay muted loop playsInline>
            <source src="/video/Vid1.mp4" type="video/mp4"></source>
          </video>

          <div className=" absolute md:top-20 bottom-5 left-3 ">
            <button className=" relative overflow-hidden p-2 md:w-16 w-12 flex justify-center items-center bg-gray-200/50 rounded-lg" onClick={handlePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
              <div style={{ width: `${duration}%` }} className=" absolute bottom-0 left-0 h-[2px] rounded-lg bg-emerald-600 "></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate_banner2;
