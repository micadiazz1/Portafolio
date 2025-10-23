
import './App.css';
import {Header} from './components/layout/Header';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Proyect} from './components/Proyect';
import {Contact} from './components/Contact';

function App() {
  return (
    <div className='layout'> 
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Proyect></Proyect>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
