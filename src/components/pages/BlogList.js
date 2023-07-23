import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {
    // const blogs = props.blog;
    // const title = props.title;
    const getDate = (index) => {
        return blogs[1][index].date;
    }
    const getStartTime = (index) => {
        return blogs[1][index].start_time;
    }
    const getEndTime = (index) => {
        return blogs[1][index].end_time;
    }
    return (  
        <>
            <h2 className='text-4xl font-extrabold my-6 text-center text-[#DE3163]'>{title}</h2>
            <div className="w-full flex flex-wrap justify-center gap-6 px-4 mb-10">
                {blogs[0].map((blog, index)=>(
                    
                    <Link key = {blog.id} to = {`/events/${blog.id}`} className="bg-white no-underline hover:no-underline max-w-sm rounded overflow-hidden border  hover:cursor-pointer transform transition hover:scale-90 md:w-1/3  w-full">
                         <div className="">
                            
                            <img className="w-full h-auto" src={"/images/logo_" + blog.organiser.toLowerCase() + ".jpg"} alt="helli" />
                            <div className="px-6 pt-2">
                                {/* <div className="font-bold text-xl text-center text-[#DE3163] mb-2">{blog.organiser}</div> */}
                                <p className="font-bold  text-xl text-[#DE3163] text-center mb-4">
                                    {blog.description}
                                </p>
                                <div className='flex'>
                                    <h2 className='font-bold text-xl text-center text-[#DE3163] '>Venue:</h2>
                                    <h4 className='pl-2 text-xl font-normal'>{blog.venue}</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='font-bold text-xl text-center text-[#DE3163] '>Date:</h2>
                                    <h4 className='pl-2 text-xl font-normal'>{getDate(index)}</h4>
                                </div>
                            </div>
                            <div className="px-6 pb-4">
                                <h1 className="font-bold text-xl text-center text-[#DE3163] mb-2"> Timings: </h1>
                                
                                <div className="flex">
                                    <h2 className='font-bold text-xl text-[#DE3163]'>Start:</h2>
                                    <h4 className='pl-2 text-xl'>{getStartTime(index)}</h4>
                                </div>
                                <div className="flex ">
                                    <h2 className='font-bold text-xl text-[#DE3163]'>End:</h2>
                                    <h4 className='pl-2 text-xl'>{getEndTime(index)}</h4>
                                </div>
                                
                            </div>
                        </div>
                    </Link>


                ))}
            </div>
        </>
        
    );
}
 
export default BlogList;