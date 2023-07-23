import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:5000/api/events/' + id);
    const navigate = useNavigate();
    console.log(blog);

    const handleClick = () => {
        fetch('http://localhost:5000/events/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.rows[0].venue}</h2>
                    <p>Committee : {blog.rows[0].organiser}</p>
                    <p><b>Date</b>{blog.rows[0].date}</p>
                   
                    <p> <b>Time:</b>{blog.rows[0].start_time} to {blog.rows[0].end_time}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;