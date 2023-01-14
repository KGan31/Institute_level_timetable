import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    // const [id, setid] = useState('');
    // const [day, setDay] = useState('');
    // const [end_time, endtime] = useState('');
    // const[subject,setSubject]=useState('');
    // const[faculty,setFaculty]=useState('');
    // const[status,setStatus]=useState('');
    // const[semester,setSemester]=useState('');
    // const[branch,setStat]=useState('');
    // const[classroom,setClassroom]=useState('');
    // const [start_time, setstarttime] = useState('mario');

    const [date, setDate] = useState('');
    const [organiser, setorganiser] = useState('');
    const [venue, setVenue] = useState('');
    const [start_time, setstarttime] = useState('');
    const [end_time, setendtime] = useState('');
    const [description, setdescription] = useState('');



    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {date,organiser,venue,start_time,end_time,description};
        setIsPending(true);

        fetch('http://localhost:5000/tt',{
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })

    }  

    return (  
        <div className="create">
            <h2>Add a New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Date</label>
                <input 
                type="text"  
                required
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
                />

                <label>Event Venue</label>
                <input 
                type="text"  
                required
                value = {venue}
                onChange = {(e) => setVenue(e.target.value)}
                />

                <label>Start Time</label>
                <input 
                type="text"  
                required
                value = {start_time}
                onChange = {(e) => setstarttime(e.target.value)}
                />

                <label>End Time</label>
                <input 
                type="text"  
                required
                value = {end_time}
                onChange = {(e) => setendtime(e.target.value)}
                />

                <label >Event Description:</label>
                <textarea 
                required
                value={description}
                onChange = {(e) => setdescription(e.target.value)}
                ></textarea>
                <label>Organiser:</label>
                <select
                    value = {organiser}
                    onChange = {(e) => setorganiser(e.target.value)}
                >
                    <option value="Technovanza">Technovanza</option>
                    <option value="Rangawardhan">Rangawardhan</option>
                    
                    <option value="Pratibimb">Pratibimb</option>
                    <option value="E-Cell">E-Cell</option>
                    <option value="DLA">DLA</option>
                    <option value="COC">COC</option>
                    <option value="SRA">SRA</option>
                    
                </select>
                {!isPending && <button>Add Event</button>}
                {isPending && <button disabled>Adding Event....</button>}
                
            </form>
        </div>
    );
}
 
export default Create;