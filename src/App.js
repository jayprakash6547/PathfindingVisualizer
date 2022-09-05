import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <h1>Note for use dijkstra algorithm.</h1>
          <p>
            <h3>
              If you visualize dijkstra algorithm. You must follow some steps to
              learn Dijkstra It is only applicable on desktop or laptop screen.
              If you use laptop or desktop then you must use mouse or touchpad
              and create the wall by pressing the right click in mouse or
              touchpad.
            </h3>
          </p>
        </div>
      </>
      <PathfindingVisualizer />
    </div>
  );
}
export default App;
