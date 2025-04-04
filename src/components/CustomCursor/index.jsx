import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      }, 150);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className="cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor2"
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
    </React.Fragment>
  );
};

export default Cursor;
