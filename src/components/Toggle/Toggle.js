import React, { useState } from "react";

export default function Toggle({ labelLeft, labelRight, toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    const newState = !isToggled;
    toggle(newState);
    onClick(newState);
  };

  const inputStyle = {
    opacity: "0",
    width: "0",
    height: "0",
  };

  const spanStyle = {
  // Change to relative positioning
    display: "flex",
    width: "60px",
    height: "30px",
  };

  const spanSliderStyle = {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: isToggled ? "#f78431ff" : "#A95B1F",
    transition: "0.3s",
    borderRadius: "30px",
  };

  const spanBeforeStyle = {
    position: "absolute",
    content: "",
    height: "25px",
    width: "25px",
    left: "3px",
    bottom: "2.6px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    transition: "0.3s",
    transform: isToggled ? "translateX(29px)" : "translateX(0)",
  };

  return (
    <div style={{ position: "relative", width: "60px", height: "30px", display: "flex", alignItems: "center" }}>
      <label>
        <input
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
          style={inputStyle}
        />
        <span style={spanStyle}>
          <span style={spanSliderStyle}>
            <span style={spanBeforeStyle}></span>
          </span>
          <strong
            style={{
              position: "absolute",
              left: "100%",
              width: "max-content",
              height: "100%",
              lineHeight: "30px",
              marginLeft: "10px",             
              cursor: "pointer",
            }}
          >
            {isToggled ? labelRight : labelLeft}
          </strong>
        </span>
      </label>
    </div>
  );
}
