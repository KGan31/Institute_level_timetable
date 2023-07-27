import { useState, useEffect  } from "react";
// import axios from 'axios';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        console.log("code reaceh here");
        const abortCont = new AbortController();

        setTimeout(()=> 
        {
            fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
 
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
            setError(err.message);
            setIsPending(false);
            }
        })
        },0);

        // axios.get('/api/events').then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.error(err);
        // })

        return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error}
}
   
export default useFetch;
