import React,{useState, useContext} from "react";
import {Button} from './components/Button';
import "./components/Button.css"
import './components/Navbar.css';
import {Link} from 'react-router-dom';
import { AuthContext } from "./auth/AuthContext";

function Navbar(){
    const [click,setClick]=useState(false);
    const [dropdown,setDropdown]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const context = useContext(AuthContext);

const onMouseEnter=()=>{
    if(window.innerWidth<900)
    {
        setDropdown(false);
    }
    else{
        setDropdown(true);
    }
};

const onMouseLeave=()=>{
    if(window.innerWidth<900)
    {
        setDropdown(false);
    }
    else{
        setDropdown(false);
    }
};

    const handleLogout = () => {
        //call the logout function of the useContext
        context.logout();
    }

    return (
    <>
    <nav className="navbar">
        
         <Link to='/' className="navbar-logo">VJTI Timetable<i className="fab fa-firstdraft"/>
         </Link> 
         <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
         <ul className={click ? 'nav-menu active' :'nav-menu'}>
            <li className="nav-item">
            
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
            
            <Link to='/events' className="nav-links" onClick={closeMobileMenu}>Events</Link>
            </li>
             <li className="nav-item" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            
            </li> 

            {/* <li className="nav-item">
            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>Contact
            </Link>
            </li> */}

            <li className="nav-item">            
            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>dfdfdfdf
            </Link>
             
             </li> 
             <li className="nav-item">            
            <Link to='/map' className="nav-links" onClick={closeMobileMenu}>Map
            </Link>
            </li> 
            <li className="nav-item">            
            <Link to='/studentdetails' className="nav-links" onClick={closeMobileMenu}>Timetable
            </Link>
            </li>
         </ul>
         {context.isAuthenticated ?
            <Link to='signup'>
                <button className='btn' onClick={handleLogout}>
                    Logout
                </button>
            </Link>
             :
            <Button/> 
        }
     </nav>
    </>
    );
}

export default Navbar;