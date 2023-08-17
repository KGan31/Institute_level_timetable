import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { toast } from 'react-toastify';

export default function AddEvent({setDisplay}){

    const token = localStorage.getItem("token");

    const [organiser, setOrganiser] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            org: organiser,
            venue: venue,
            date: date,
            desc: description,
            st_time: start_time,
            end_time: end_time,
            // role: role
        }

        fetch("http://localhost:5000/api/createEvent", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(!res.ok)
            {
                console.log("Could not fetch");
                console.log(res);
            }
            else{
                return res.json();
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err); 
        })
    }

    return (
        <>
            
		<div class="container mx-auto">
			<div class="flex justify-center my-12">
				
				<div class="w-full ">
					
					<div class="w-full   rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-3xl text-center text-white font-bold">Add an Event</h3>
						<form onSubmit={handleSubmit} class="px-8 pt-6 pb-8 mb-4  rounded">
							<div class="mb-4 sm:flex sm:gap-10 sm:justify-between">
								<div class="mb-4 md:mb-0 sm:w-1/2 w-full">
									<label class="block mb-2 text-lg font-bold text-white" for="org">
										Organiser
									</label>
									<select onChange={(e) => setOrganiser(e.target.value)} class="w-full  border rounded shadow px-3 py-3 bg-black text-white " >
                                        <option selected disabled>Choose Organiser</option>
                                        <option value={"CoC"}>Coc</option>
                                        <option value={"SRA"}>SRA</option>
                                        <option value={"Technovanza"}>Technovanza</option>
                                        <option value={"Rangawardhan"}>Rangawardhan</option>
                                    </select>
								</div>
								<div class="sm:w-1/2">
									<label class="block mb-2 text-lg font-bold text-white" for="venue">
										Venue
									</label>
									<input
										class="w-full px-3 py-4 text-base bg-black placeholder:text-white leading-tight  border rounded shadow text-white"
										id="venue"
										type="text"
                                        onChange={(e) => setVenue(e.target.value)}
										
									/>
								</div>
							</div>

                            <div class="mb-2 sm:flex sm:gap-10 sm:justify-between">

                                <div class="mb-4 sm:w-1/2">
                                    <label class="block mb-2 text-sm font-bold text-white" for="date">
                                    Date of Event
                                    </label>
                                    <input
                                        class="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="date"
                                        type="date"
                                        onChange={(e) => setDate(e.target.value)}
                                        placeholder="Date"
                                    />
                                </div>
                                <div class="mb-4 sm:w-1/2">
                                    <label class="block mb-2 text-sm font-bold text-white" for="desc">
                                    Description
                                    </label>
                                    <textarea
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow "
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="desc"                    
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div class="mb-4 sm:flex sm:gap-10 sm:justify-between">

                                <div class="mb-4 sm:w-1/2">
                                    <label class="block mb-2 text-sm font-bold text-white" for="st_time">
                                    Start Time
                                    </label>
                                    <input
                                        class="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow "
                                        id="st_time"
                                        onChange={(e) => setStartTime(e.target.value)}
                                        type="time"
                                    
                                    />
                                </div>

                                <div class="mb-4 sm:w-1/2">
                                    <label class="block mb-2 text-sm font-bold text-white" for="end_time">
                                    End Time
                                    </label>
                                    <input
                                        class="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow "
                                        id="end_time"   
                                        onChange={(e) => setEndTime(e.target.value)}
                                        type="time"
                                    />
                                    
                                </div>
                            </div>
							
                            <div class="flex justify-center gap-5">
                                <button type="button" onClick={() => setDisplay(false)} class="rounded-lg px-5 py-3 transform transition hover:scale-90 shadow border bg-red-400 text-white font-bold">Cancel</button>
                                <button type="submit" class="rounded-lg px-5 py-3 transform transition hover:scale-90 shadow border bg-green-600 text-white font-bold">Add</button>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	
        
        </>
    )
}