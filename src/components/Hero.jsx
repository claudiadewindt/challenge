import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-top-content">
          <div className="white-top-box"></div>
          <div className="white-bottom-box"></div>
          {/*  love */}
          <h1 className="love">
            <span className="letter-l">l</span>
            <span className="heart">
              <svg id="heart" viewBox="0 0 367.79 331.33">
                <path
                  class="cls-1"
                  d="M590,289.26c.43,3.88.54,7.41,0,15-.48,3.09-1,6.17-1.45,9.26C583,351.6,567,385,541.92,413.9c-29.22,33.73-64.83,59.61-103.13,81.94-10.29,6-21.18,11-31.79,16.42h-1a26.29,26.29,0,0,0-2.9-1.79,411.16,411.16,0,0,1-123.3-87c-26.9-27.47-45-60-53.17-97.73-1.55-7.1-2.44-14.35-3.63-21.53-.67-5.05-.45-9,0-16,.55-8.14,2-10.35,3.19-15.49,10.4-45.19,36.7-75.61,82.27-87.69A113.1,113.1,0,0,1,333,181.26a47,47,0,0,1,11,0c3.55.42,5.49,1.1,8.24,1.64,19.07,3.73,34.67,13.82,48.75,26.68l5.45,5c3-2.68,5.56-5,8.19-7.32C428.1,195.51,443,186.41,460.81,183c2.74-.53,5.46-1.13,8.19-1.7a52.42,52.42,0,0,1,11,0c6.56.87,13.24,1.25,19.67,2.68,44.34,9.9,72.4,37.22,85,80.57C587,272.59,589.43,280.23,590,289.26ZM406.32,274c-5.05-6.65-9.75-13.32-14.95-19.57-17.23-20.73-38.78-29.72-65.66-23.21-44.37,10.73-58.92,49.9-55.52,78,3.48,28.92,15.43,54.36,34.28,76.32,27.25,31.77,61,55.46,97.16,75.92,3.13,1.77,5.56,1.74,8.68,0,29.09-16.21,56.12-35.25,80.41-58.08,15.41-14.5,28.56-30.74,37.72-50,9.82-20.6,16.6-41.86,12.69-65.06-5-29.42-21.54-49-50.63-56.75-28.42-7.58-51.82.93-70.05,23.85C415.7,261.43,411.17,267.59,406.32,274Z"
                  transform="translate(-222.58 -180.94)"
                />
              </svg>
            </span>
            <span className="letter-v">v</span>
            <span className="letter-e">e</span>
            <span className="dot">.</span>
          </h1>
        </div>
        <div className="hero-bottom-content">
          <div className="left-content">
            <h2 className="spring">Spring</h2>
            <h2 className="t2017">2017</h2>
            <h3>with Anwar Hadid & Sophia Richie</h3>
            <p>
              Engineered for perfect form and exceptional fit - whatever you do
              in them.
            </p>
          </div>

          <h1 className="right-content">
            <span className="letter-l2">l</span>
            <span className="dot2">.</span>
            <span className="letter-a">a</span>
            <span className="dot3">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
