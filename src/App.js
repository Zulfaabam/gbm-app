import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-dark font-heading">GBM APP</h1>
      <Footer />
    </div>
  );
}

export default App;
