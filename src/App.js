import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Coffee from './Pages/Coffee';
import Projects from './Pages/Projects';
import Trips from './Pages/Trips';

//ctrl D para selecionar palavrass iguais e alterar de uma vez
function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/sobre" element={<About/>}></Route>
      </Routes>  
      <Routes>
        <Route path="/viagens" element={<Trips/>}></Route>
      </Routes>
      <Routes>
        <Route path="/projetos" element={<Projects/>}></Route>
      </Routes>
      <Routes>
        <Route path="/cafe" element={<Coffee/>}></Route>
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contact/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
