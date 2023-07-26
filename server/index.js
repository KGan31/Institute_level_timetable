const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


const bodyparser = require("body-parser");

//middleware
app.use(cors())
app.use(express.json());

const data = {
    portal : "GeeksforGeeks",
    knowledge : "unlimited",
    location : "Noida"  
}
  
app.get('/' , (req,res)=>{
   // This will send the JSON data to the client.
    res.json(data); 
})
  

//create
app.post("/tt",async(req,res) =>{
    try{
        const date = req.body.date;
        const organiser = req.body.organiser;
        const venue = req.body.venue;
        const start_time = req.body.start_time;
        const end_time = req.body.end_time;
        const description = req.body.description;
        

        const newtt = await pool.query(
            "INSERT INTO events (date,organiser,venue,start_time,end_time, description) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [date,organiser,venue,start_time,end_time, description]
            );
        
        res.json(newtt);

    } catch(err){
        console.error(err.message);
    }
});

app.get("/api/events",async(req,res) => {
    try{
        const display = await pool.query("SELECT * FROM events");
        const formated_dateTime = [];
        for(let i=0; i< display.rows.length; i++){
            const date = display.rows[i].date;
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formated_date = date.toLocaleDateString('en-US', options);

            const startTime = new Date(`1970-01-01T${display.rows[i].start_time}Z`);
            const endTime = new Date(`1970-01-01T${display.rows[i].end_time}Z`);
            
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'UTC', // Set the time zone to UTC
              });

            const formattedStartTime = formatter.format(startTime);
            const formattedEndTime = formatter.format(endTime);

            const obj = {
                date: formated_date,
                start_time: formattedStartTime,
                end_time: formattedEndTime
            }

            formated_dateTime[i] = obj;
        }
        const data = [];
        data[0] = display.rows;
        data[1] = formated_dateTime;
        res.json(data);
        // console.log(display.rows);
    } catch (err){
        console.error(err.message);
    }
});

app.get("/api/events/:id",async(req,res) =>{
    try{
       const {id} = req.params;
        const tt = await pool.query("SELECT * FROM events WHERE id = $1",[id])

        res.json(tt);
    } catch (err){
        console.log(err.message);
    }
});

//update
// app.put("/tt/:id",async(req,res) => {
//     try{
//         const {id} = req.params;
//         const {description} = req.body;
//         const updatett = await pool.query
//         ("UPDATE tt SET description = $1 WHERE tt_id = $2",
//         [description,id]
//         );

//         res.json("updated")
//     } catch {err} {
//         console.log(err.message);
//     }
// })

// //events show 
// app.get('/tt', async(req, res) => {
//     try{
//         const display = await pool.query("SELECT * FROM events");
//         res.json(display);
//     }catch(err){
//         console.log(err.message);
//     }
// })
  
// Sample JSON data

// Server setup
app.listen(5000, () => {
    console.log("server has started on port 5000")
});

