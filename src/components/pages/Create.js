import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
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
                <label>Event Venue</label>
                <input 
                type="text"  
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label >Event Description:</label>
                <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Committee:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
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