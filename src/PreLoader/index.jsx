import React from "react";

const PreLoader = () => {
  return (
    <div id="preloader" className="preloader">
      <button className="th-btn th-radius preloaderCls">
        Cancel Preloader
      </button>
      <div id="loader" className="th-preloader">
        <div className="animation-preloader">
          <div className="txt-loading">
            <span preloader-text="L" className="characters">
              L
            </span>
            <span preloader-text="O" className="characters">
              O
            </span>
            <span preloader-text="G" className="characters">
              G
            </span>
            <span preloader-text="I" className="characters">
              I
            </span>
            <span preloader-text="M" className="characters">
              M
            </span>
            <span preloader-text="E" className="characters">
              E
            </span>
            <span preloader-text="T" className="characters">
              T
            </span>
            <span preloader-text="R" className="characters">
              R
            </span>
            <span preloader-text="I" className="characters">
              I
            </span>
            <span preloader-text="X" className="characters">
              X
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
