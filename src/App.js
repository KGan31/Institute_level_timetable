
import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Branch from './components/pages/Branch';
import Computer from './components/pages/Computer';
import Civil from './components/pages/Civil';
import Electrical from './components/pages/Electrical';
import Electronics from './components/pages/Electronics';
import Textile from './components/pages/Textile';
import IT from './components/pages/IT';
import Mechanical from './components/pages/Mechanical';
import Extc from './components/pages/Extc';
import Production from './components/pages/Production';






function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<ContactUs/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/branch' element={<Branch/>}/>
      <Route path='/extc' element={<Extc/>}/>
      <Route path='/electrical' element={<Electrical/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/mechanical' element={<Mechanical/>}/>
      <Route path='/computer' element={<Computer/>}/>
      <Route path='/textile' element={<Textile/>}/>
      <Route path='/civil' element={<Civil/>}/>
      <Route path='/mechanical' element={<Mechanical/>}/>
       <Route path='/production' element={<Production/>}/>
      <Route path='/it' element={<IT/>}/>
    </Routes>
  </Router>
  );
}

export default App;

        

