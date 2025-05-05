import React, { useState } from "react";

export function LightSwitchPanel() {
  const [lights, setLights] = useState(Array(9).fill(false));

  function toggleLight(targetIndex) {
    setLights((prev) =>
      prev.map((light, index) => {
        return index === targetIndex ? !light : light;
      })
    );
  }

  function toggleAllLights() {
    setLights((prev) => prev.map((light) => !light));
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {lights.map((isOn, index) => (
        <button
          key={index}
          onClick={() => toggleLight(index)}
          style={{ backgroundColor: isOn ? "green" : "grey" }}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      ))}
      <button onClick={toggleAllLights} style={{ margin: "0 auto" }}>
        Toggle All Lights
      </button>
    </div>
  );
}
