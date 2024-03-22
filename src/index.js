import React from "react";
import ReactDOM from "react-dom";

// Separate Home component into its own file for better organization

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Main App component

function App() {
  return <Home />;
}

// Render the App component to the root element

ReactDOM.render(<App />, document.getElementById("root"));
