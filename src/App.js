import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="bg-blue-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
