import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <main className='app'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
