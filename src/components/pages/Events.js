import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../auth/AuthContext';
import AddEvent from './AddEvent';

export default function Events(){
 const [eve , setEve] = useState([]);
 const [display, setDisplay] = useState(false);

 const context = useContext(AuthContext);
  console.log(context);

  // const getEvents = async()=> {
    
  //   try {
  //       const response = await fetch("http://localhost:5000/api/events")
  //       const jsonData =await response.json()
  //       console.log(jsonData);
  //       setEve(jsonData);
        
  //   } catch (err) {
  //       console.error(err.message);
  //   }
  // }
  useEffect(()=>{
    // getEvents();
    // console.log(eve);
    fetch("http://localhost:5000/api/events")
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch');
            }
            return res.json();
        })
        .then(data => {
            // console.log(data); 
            setEve(data);
        })
        .catch(err=>{
           console.error(err);
        })
  },[]);
  
  const getDate = (index) => {
      return eve[1][index].date;
  };

  console.log(eve);
    return(
      <>
        {/* <div className='gradient'>
        
        <div className='center-table'>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Description</th>
              <th>Organiser</th>
              <th>Venue</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          { eve[0].map((eve1, index) =>(
              <tr >
                <td>{eve1.description}</td>
                <td>{eve1.organiser}</td>
                <td>{eve1.venue}</td>
                <td>{getDate(index)}</td>
              </tr>
          ))}
          
            
          </tbody>
        </table>
      </div>
      </div> */}
      <div className='gradient'>
          <h1 className='text-center font-bold  uppercase '>EVENTS</h1>
          <div className="flex flex-col px-10 py-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table
                    className="min-w-full border text-center  dark:border-neutral-500">
                    <thead className="border-b text-xl font-bold dark:border-neutral-500">
                      <tr>
                        <th
                          
                          className="border-r px-6 py-4 dark:border-neutral-500">
                          #
                        </th>
                        <th
                          
                          className="border-r px-6 py-4 dark:border-neutral-500">
                          Event Description
                        </th>
                        <th
                          
                          className="border-r px-6 py-4 dark:border-neutral-500">
                          Organiser
                        </th>
                        <th
                          
                          className="border-r px-6 py-4 dark:border-neutral-500">
                          Venue
                        </th>
                        <th
                          
                          className="border-r px-6 py-4 dark:border-neutral-500">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                    { eve.length>0 && eve[0].map((eve1, index) =>(
                        // <tr >
                        //   <td></td>
                        //   <td></td>
                        //   <td></td>
                        //   <td></td>
                        // </tr>

                      <tr className="border-b dark:border-neutral-500" key={eve1.id}>
                        <td
                          className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {index + 1}
                        </td>
                        <td
                          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                          {eve1.description}
                        </td>
                        <td
                          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                          {eve1.organiser}
                        </td>
                        <td
                          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                          {eve1.venue}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{getDate(index)}</td>
                      </tr>
                    ))}                  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* //adding an event by the committee heads */}

          {
            context.isAuthenticated &&
            !display &&
            <div className='flex justify-center'>
                <button 
                  className='bg-green-600 transform transition hover:scale-90 px-5 py-3 rounded border shadow text-white font-bold flex gap-5'
                  onClick={() => setDisplay(true)}
                >
                  
                  Add Event
                </button>
            </div>
          }

          {
            display &&
            <AddEvent display = {setDisplay} />    
          }
      </div>
      
    </>
    );
}
