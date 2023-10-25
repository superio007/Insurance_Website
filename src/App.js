import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/AboutUs';
import Signlog from "./Components/signlog";
import FAQ from './Components/FAQ';
import Inquery from './Components/Inquery';
import Health from './Components/HealthInsurance';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Inquery' element={<Inquery/>}/>
          <Route path='/signlog' element={<Signlog/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
