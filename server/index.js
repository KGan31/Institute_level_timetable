const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors())
app.use(express.json());

//create
app.post("/tt",async(req,res) =>{
    try{
        const {description} = req.body();
        const newtt = await pool.query(
            "INSERT INTO tt (description) VALUES($1) RETURNING *"
            [description]
            );
        
        res.json(newtt);
    } catch(err){
        console.error(err.message);
    }
});
//get 
app.get("/tt",async(req,res) => {
    try{
        const allrooms = await pool.query("SELECT * FROM tt")
        res.json(allrooms.rows);
    } catch (err){
        console.error(err.message);
    }
});

app.get("/tt/:id",async(req,res) =>{
    try{
        const {id} = req.params;
        const tt = await pool.query("SELECT * FROM tt WHERE tt_id = $1",{id})

        res.json(tt.rows[0]);
    } catch {err} {
        console.log(err.message);
    }
});

//update
app.put("/tt/:id",async(req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updatett = await pool.query
        ("UPDATE tt SET description = $1 WHERE tt_id = $2",
        [description,id]
        );

        res.json("updated")
    } catch {err} {
        console.log(err.message);
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000")
});

