import React from "react";
import About from "./Components/About";
import Card from "./Components/Card";
import Carousal from "./Components/carusel";
import ContactMe from "./Components/contact";
import Footer from "./Components/Footer";
import ProCards from "./Components/ProCards";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card />
      <About />
      <Skills />
      <Carousal />
      <ProCards />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
