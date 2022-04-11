import logo from './logo.svg';
import './App.css';

import SuccessMsg from './components/SuccessMsg';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
   
  
      <Home/>
      {/* <NavBar/> */}
      <Projects/>

      <Skills/>

      <Contact/>

     
      </div>
     
   
  );
}

export default App;
