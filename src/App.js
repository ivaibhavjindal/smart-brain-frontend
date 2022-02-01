import React from "react";
import Footer from "./components/Partials/Footer";
import Header from "./components/Partials/Header";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
