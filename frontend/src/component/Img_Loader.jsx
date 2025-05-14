import React, { useEffect, useState } from "react";

const Image_Loader = ({ lowSrc, src, alt, styleForImg, styleForPar, size = 24 }) => {
  const [Load, setLoad] = useState(true);
  const [Load2, setLoad2] = useState(true);
  useEffect(() => {
    if (!lowSrc || !Load) {
      setLoad2(false);
    }
  }, [lowSrc, Load]);
  const onLoading = () => {
    setLoad(false);
  };
  const onLoading2 = () => {
    setLoad2(false);
  };

  return (
    <div className={`relative  " " ${styleForPar}`}>
      <img className={` hidden  `} onLoad={onLoading} src={src} alt={alt} />
      {!Load && <img className={` ${styleForImg} line-clamp-6 `} onLoad={onLoading} src={src} alt={alt} />}
      {Load &&
        (lowSrc ? (
          <>
            <img className={`${styleForImg} line-clamp-6 `} onLoad={onLoading2} src={lowSrc} alt={alt} />
            <div className=" flex space-x-2 items-center absolute text-green-600 bottom-2 left-2 text-xs">
              <div> Fetching HD version...</div>
              <svg className="animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={10} height={10}>
                <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          </>
        ) : (
          <div className={`${styleForPar}  flex justify-center items-center bg-gradient-to-b from-gray-100  to-gray-200 ${styleForPar}`}>
            <div className=" loader"></div>
          </div>
        ))}
      {Load2 && (
        <div className={`${styleForImg} absolute loader inset-0 flex justify-center items-center bg-gradient-to-b from-gray-100  to-gray-200 ${styleForPar}`}>
          <div className=" loader"></div>
        </div>
      )}
    </div>
  );
};

export default Image_Loader;
