import React, {useState, useEffect, useDebugValue} from 'react';

export default function Events(){
 const [eve , setEve] = useState([]);
  const getEvents = async()=> {
    
    try {
        const response = await fetch("http://localhost:5000/events")
        const jsonData =await response.json()
        console.log(jsonData);
        setEve(jsonData);
        
    } catch (err) {
        console.error(err.message);
    }
  }
  useEffect(()=>{
    getEvents();
  },[]);
  
  console.log(eve);
    return(
        <>
        <div className='gradient'>
        <h1 >EVENTS</h1>
        <div className='center-table'>
        <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Description</th>
        <th>Organiser</th>
        <th>Venue</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    { eve.map(eve1 =>(
        <tr>
        <td>{eve1.description}</td>
        <td>{eve1.organiser}</td>
        <td>{eve1.venue}</td>
        <td>{eve1.date}</td>
      </tr>
     ))}
     
      
    </tbody>
  </table>
  </div>
  </div>
        </>
    );
}
