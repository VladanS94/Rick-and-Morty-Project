import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App h-[100dvh] bg-gray-300 dark:bg-gray-700">
      <Routes />
    </div>
  );
}

export default App;
