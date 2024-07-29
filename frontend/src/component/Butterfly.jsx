import React, { useEffect } from "react";
import anime from "animejs";

const Butterfly = () => {
  useEffect(() => {
    const path = anime.path("#path");

    const timeline = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1000,
      complete: () => {
        anime({
          targets: ".leaf",
          rotate: 40,
          duration: 3000,
          loop: true,
          direction: "alternate",
          easing: "easeInOutQuad",
        });
        anime({
          targets: ".petals",
          scale: 1.05,
          duration: 6000,
          loop: true,
          direction: "alternate",
          easing: "easeInOutQuad",
        });
      },
    });

    timeline.add({
      targets: ".stem",
      scale: [0, 1],
    });

    timeline.add({
      targets: ".leaf",
      rotate: [0, 45],
    });
    timeline.add(
      {
        targets: ".petals",
        scale: [0, 1],
      },
      "-=1000"
    );
    // bee1
    timeline.add(
      {
        targets: "#bee",
        opacity: [0, 1],
      },
      "-=750"
    );

    anime({
      targets: "#bee",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      loop: true,
      duration: 12500,
      easing: "linear",
    });
  }, []);

  return (
    <div className=" relative inline-block w-52">
      <div>
        <svg className="  absolute max-w-12" id="bee" viewBox="-10.9 -10.5 21 21">
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
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 0 150 100">
        <defs>
          <mask id="mask-petals">
            <rect width="100" height="100" fill="hsl(0, 0%, 100%)" />
            <g transform="translate(50 40)">
              <g className="petals">
                <circle r="11" fill="hsl(0, 0%, 0%)" />
              </g>
            </g>
          </mask>
        </defs>
        {/* Petals */}
        <g className=" text-green-600" transform="translate(50 98)">
          <g transform="scale(1 1)">
            <g fill="currentColor">
              <g className="leaf" transform="rotate(45)">
                <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
              </g>
              <g transform="scale(-1 1)">
                <g className="leaf" transform="rotate(45)">
                  <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
                </g>
              </g>
            </g>
          </g>
        </g>
        {/* flower */}
        <g className=" text-yellow-500" mask="url(#mask-petals)">
          <g transform="translate(50 40)">
            <g fill="currentColor">
              <g className="petals">
                <circle transform="translate(0 -14)" r="11" />
                <circle transform="rotate(72) translate(0 -14)" r="11" />
                <circle transform="rotate(144) translate(0 -14)" r="11" />
                <circle transform="rotate(216) translate(0 -14)" r="11" />
                <circle transform="rotate(288) translate(0 -14)" r="11" />
              </g>
            </g>
          </g>
        </g>

        <path id="path" stroke="none" fill="none" d="M -10 20 a 30 30 0 1 0 60 0 30 30 0 1 0 -60 0" />
      </svg>
    </div>
  );
};

export default Butterfly;
