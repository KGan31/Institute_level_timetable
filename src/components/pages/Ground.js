import { useState, useEffect } from "react";
const Ground = () => {
 const [data, setData] = useState("");
 const [loading, setLoading] = useState("");
 const [error, setError] = useState("");

 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
   .then((response) => console.log(response));
 }, []);


 return (
    <></>
 )
}
export default Ground;