import { useState } from "react";

const StudentDetails = () => {
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const detail = {year, branch};
        console.log(detail);
    }

    return (
        <div className="details">
            <h2>Enter Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Year</label>
                <select
                    value = {year}
                    onChange = {(e) => setYear(e.target.value)}
                >
                    <option value="I">1st Year</option>
                    <option value="II">2nd Year</option>
                    <option value="III">3rd Year</option>
                    <option value="IV">4th Year</option>
                </select>
                <label>Enter Branch</label>
                <select
                    value = {branch}
                    onChange = {(e) => setBranch(e.target.value)}
                >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Civil">Civil</option>
                </select>
                <button>Submit</button>
            </form>
        </div> 

    );
}
 
export default StudentDetails;