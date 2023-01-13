import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {
    // const blogs = props.blog;
    // const title = props.title;
    
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Committee{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;