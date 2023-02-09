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
          <Tooltip content="Right Tooltip Content!" position="right" delay="0">
            <button>Right Tooltip</button>
          </Tooltip>
        </div>

        {/* top tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Top Tooltip Content!" position="top" delay="0">
            <button>Top Tooltip</button>
          </Tooltip>
        </div>


        {/* bottom tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Bottom Tooltip Content!" position="bottom" delay="0">
            <button>Bottom Tooltip</button>
          </Tooltip>
        </div>

        {/* left tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Left Tooltip Content" position="left" delay="0">
            <button>Left Tooltip</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
