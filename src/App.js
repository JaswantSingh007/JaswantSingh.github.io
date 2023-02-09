import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

export default function App()
{
  return (
    <div className="App">
      <div className="main">
        {/* right tooltip */}
        <div className="main-tooltip">
          <Tooltip position="right" delay="0">
            <button>Right Tooltip</button>
          </Tooltip>
        </div>

        {/* top tooltip */}
        <div className="main-tooltip">
          <Tooltip position="top" delay="0">
            <button>Top Tooltip</button>
          </Tooltip>
        </div>

        {/* bottom tooltip */}
        <div className="main-tooltip">
          <Tooltip position="bottom" delay="0">
            <button>Bottom Tooltip</button>
          </Tooltip>
        </div>

        {/* left tooltip */}
        <div className="main-tooltip">
          <Tooltip position="left" delay="0">
            <button>Left Tooltip</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
