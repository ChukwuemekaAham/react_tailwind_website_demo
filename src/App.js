import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
// import Navigation2 from "./components/Navigation2";

const App = () => {
  return (
    <div>
      
      <Navigation />

      <main>
        <Header />
        <Content />
      </main>

      <Footer />
    </div>
  );
};

export default App;
