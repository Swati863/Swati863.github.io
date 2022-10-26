
import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Skills from './Pages/Skills';



function App() {
  const infoRef=useRef(null)
  const skillRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const homeRef = useRef(null)
    
  return (
  
    
    <div className="App">
   
    <Navbar projectsRef={projectsRef} homeRef={homeRef} infoRef={infoRef} skillRef={skillRef} contactRef={contactRef} />
    <div className="item-container"  ref={homeRef}><Home /></div> 
    <div className="item-container"  ref={infoRef}><About /></div> 
    <div className="item-container" ref={skillRef}><Skills /></div> 
    <div className="item-container" ref={projectsRef}><Project  /></div> 
    <div className="item-container-contact-section" ref={contactRef}><Contact  /></div> 
    
    </div>
  
  );

  
}

export default App;
