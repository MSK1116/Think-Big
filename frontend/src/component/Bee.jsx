import React, { useEffect } from "react";
import anime from "animejs";

const Bee = () => {
  useEffect(() => {
    const animateBee = (id) => {
      const beeElement = document.getElementById(id);
      let lastX = anime.random(0, window.innerWidth - 50);
      let lastY = anime.random(0, window.innerHeight - 50);

      const moveBee = () => {
        const newX = anime.random(0, window.innerWidth - 50);
        const newY = anime.random(0, window.innerHeight - 50);

        // Calculate the angle of rotation
        const angle = Math.atan2(newY - lastY, newX - lastX) * (180 / Math.PI);

        anime({
          targets: beeElement,
          translateX: newX,
          translateY: newY,
          rotate: angle,
          duration: anime.random(2000, 3000),
          easing: "easeInOutQuad",
          complete: () => {
            lastX = newX;
            lastY = newY;
            moveBee();
          },
        });
      };

      moveBee();
    };

    // Adjust number of bees based on screen width
    const numBees = window.innerWidth < 600 ? 3 : 6;
    Array.from({ length: numBees }).forEach((_, i) => animateBee(`bee${i + 1}`));
  }, []);

  const beeSVG = (id) => (
    <svg className="absolute max-w-12" id={id} viewBox="-10.9 -10.5 21 21">
      <g transform="rotate(90) translate(0 -4)">
        <g className="text-black" stroke="currentColor">
          <circle className="text" r="4" strokeWidth="2.5" />
          <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path transform="rotate(45) translate(0 -4)" d="M 0 0 v -3" />
            <path transform="rotate(-45) translate(0 -4)" d="M 0 0 v -3" />
            <g fill="hsl(200, 80%, 90%)">
              <path transform="rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
              <path transform="scale(-1 1) rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
            </g>
            <g fill="hsl(50, 80%, 50%)">
              <path d="M 0 0 c 2 6 8 10 0 12 -8 -2 -2 -6 0 -12" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  return <div className="relative ">{Array.from({ length: 6 }).map((_, i) => beeSVG(`bee${i + 1}`))}</div>;
};

export default Bee;
