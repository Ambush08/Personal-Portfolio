
import { Hero } from './Pages/Home/Hero';
import {Skills} from './Pages/Home/Skills';
import {AboutMe} from './Pages/Home/AboutMe';
import {Projects} from './Pages/Home/Projects';
import './App.css'
import { Testimonial } from './Pages/Home/Testimonial';
import {Contacts} from "./Pages/Home/Contacts";
import {Footer} from "./Pages/Home/Footer";

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Testimonial />
      <Contacts />
      <Footer />
    </>

  )
}

export default App
