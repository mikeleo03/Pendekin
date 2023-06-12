import React from "react";
import "./App.css";
import MainRoutes from "./Routes.tsx";
import Appbar from "./components/Appbar/Appbar.tsx";

function App() {
  return (
    <div className="app">
      {/** Appbar  */}
      <Appbar />

      {/** All inner Dashboard page */}
      <MainRoutes />
    </div>
  );
}

export default App;