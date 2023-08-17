require('dotenv').config(); 
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY;
// console.log(secretKey);

const pool = mysql.createPool({
    host: "containers-us-west-188.railway.app",
    user: "root",
    password: "hrCp5NwzTlTyuKMkHGDM",
    port: "7209",
    database: "railway",
    connectionLimit: 10
});

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database!');
// });

const bodyparser = require("body-parser");

app.use(cors())
app.use(express.json());
  
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
        

        const newtt = await mysql.query(
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
        const results = await pool.query("SELECT * FROM events");
        const display  = results[0];
        console.log(display);
        
        const formated_dateTime = [];
        for(let i=0; i< display.length; i++){
            const date = display[i].date;
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formated_date = date.toLocaleDateString('en-US', options);

            const startTime = new Date(`1970-01-01T${display[i].start_time}Z`);
            const endTime = new Date(`1970-01-01T${display[i].end_time}Z`);
            
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
        data[0] = display;
        data[1] = formated_dateTime;
        res.json(data);
        // console.log(display);
    } catch (err){
        console.error(err.message);
    }
});

app.get("/api/events/:id",async(req,res) =>{
    try{
        const {id} = req.params;
        const tt = await connection.query("SELECT * FROM events WHERE id = $1",[id])

        res.json(tt);
    } catch (err){
        console.log(err.message);
    }
});

app.get("/api/getHash", async(req, res) => {
    try{
        const password = "mihir123";
        // let hashed = "";
        const hashed = "$2b$10$flXHUp2VJ1zs6N/EoTXmTO6Amf0cW1sZYaxInVBkf0luObyfVF9E2";
    }
    catch(err){
        console.log(err);
    }
    
});

app.post('/api/login', async(req, res) => {
    try{
        // console.log(req.body);
        const cred= req.body;
        // console.log(cred.email);
        // console.log(cred.password);

        const user = await pool.query("SELECT * FROM admin WHERE email = ?", [cred.email]);

        if(user[0].length > 0)
        {
            bcrypt.compare(cred.password, user[0][0].password, (err, result) => {
                if(err){
                    console.log(err);
                }
                else{
                    if(result){
                        const accessToken = jwt.sign({id: user[0][0].id, role: user[0][0].role}, secretKey);
                        res.json({
                            email: user[0][0].email,
                            role: user[0][0].role,
                            accessToken: accessToken
                        });
                    }

                    else{
                        res.status(401).json("Incorrect Password");
                    }
                }
            });
           
        }
        else{
            res.status(400).json("Incorrect email or Password");
        }
    }   
    catch(err){
        console.log(err);
    }
});

//middleware to verify the jwtToken
const verify = (req, res, next) => {
    const authHeader = req.headers[Authorization];
    console.log(authHeader);

    if(authHeader){
        const token = authHeader.split(" ")[1];
        console.log(token);

        jwt.verify(token, secretKey, (err, payload) => {
            if(err){
                return res.status(403).json("Token is not valid");
            }

            req.user = payload;
            next();
        })
    }
    else{
        res.status(401).json("You are not Authenticated");
    }
    
}

//post api for scheduling of event by the committee head
//it also takes verify function as middleware to authenticate the user
app.post("/api/createEvent", verify, (req, res) => {

    //only the users with role 2 should be allowed
    console.log(req.user.role);
});


//update
// app.put("/tt/:id",async(req,res) => {
//     try{
//         const {id} = req.params;
//         const {description} = req.body;
//         const updatett = await mysql.query
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
//         const display = await mysql.query("SELECT * FROM events");
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

