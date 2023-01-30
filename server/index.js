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

app.get("/events",async(req,res) => {
    try{
        const display = await pool.query("SELECT * FROM events");
        res.json(display.rows);
    } catch (err){
        console.error(err.message);
    }
});

app.get("/events/:id",async(req,res) =>{
    try{
        const {id} = req.params;
        const tt = await pool.query("SELECT * FROM events WHERE id = $1",{id})

        res.json(tt);
    } catch {err} {
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

