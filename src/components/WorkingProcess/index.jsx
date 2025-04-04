import React from "react";
import working from "../../Imges/working.gif";
const WorkingProcess = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <img src={working} alt="" loading="lazy" />
    </div>
  );
};

export default WorkingProcess;
