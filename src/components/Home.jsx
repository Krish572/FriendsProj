import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [position, setPosition] = useState(null);
  const [hoverCount, setHoverCount] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const navigate = useNavigate();

  const moveButton = () => {
    const newTop = Math.random() * 80 + "%";
    const newLeft = Math.random() * 80 + "%";

    setPosition({ top: newTop, left: newLeft });
    setHoverCount((prev) => prev + 1);
    setIsMoved(true);
  };

  const getMessage = () => {
    if (hoverCount === 1) return "please do not click no";
    if (hoverCount >= 2) return "please please";
    return "";
  };

  return (
    <div className="container">
      <h1>Will you be my valentine? 💖</h1>

      <div className="button-wrapper">
        <button className="yes-btn" onClick={() => navigate("/success")}>
          Yes
        </button>

        <button
          className="no-btn"
          style={
            isMoved
              ? { position: "absolute", top: position.top, left: position.left }
              : {}
          }
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          No
          {hoverCount > 0 && (
            <div className="bottom-text">{getMessage()}</div>
          )}
        </button>
      </div>
    </div>
  );
}

