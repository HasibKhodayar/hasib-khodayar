
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Cards from './pages/cards/Cards';


function App() {

  return (
    
    
    <div className='app'>
      
    <BrowserRouter>
      <Routes>
        <Route path = "/carousel" element = {<Cards/>}/>
        <Route path="/" element = {<Home/>} />
        <Route path="/" element = {<Projects/>} />

      </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
