
import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Map from './components/pages/Map';
import Create from './components/pages/Create';
import BlogDetails from './components/pages/BlogDetails';
import StudentDetails from './components/pages/StudentDetails';

import ViewTT from './components/pages/viewTT';

//import BlogList from './components/pages/BlogList';



function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path="/blogs/:id" element = {<BlogDetails/>}/>
      <Route path='/create' element = {<Create/>}/>
      <Route path='/studentdetails' element = {<StudentDetails/>}/>

      <Route path='/viewTT' element = {<ViewTT/>}/>

    </Routes>
  </Router>
  );
}

export default App;

        

