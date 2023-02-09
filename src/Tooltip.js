import React, { useState } from "react";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
      setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="tooltip-box"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`tooltip-tip ${props.position || "top"}`}>
          {/* Content */}
          <p style={{}}>Thanks for Hovering! I'm an Tooltip</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
