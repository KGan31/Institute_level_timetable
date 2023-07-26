import {Link} from 'react-router-dom';

import { useState, useEffect } from 'react';

const BlogList = ({blogs, title}) => {

    const getDate = (index) => {
        return blogs[1][index].date;
    }
    const getStartTime = (index) => {
        return blogs[1][index].start_time;
    }
    const getEndTime = (index) => {
        return blogs[1][index].end_time;
    }

    const [activeIndex, setActiveIndex] = useState([0,1,2]);
    const isMobile = window.innerWidth < 640;  //to check the window's width

    const [StatusButtons, setStatusButtons] = useState([]);
    const [activeStatus, setActiveStatus] = useState(0);

    const active = (index) => {
        if(index === activeStatus){
            return 'bg-[#DE3163]';
        }
        else{
            return 'bg-[#FFB6C1]'
        }
    }

    //to trigger the useEffect whenever the isMobile boolean value changes
    useEffect(() => {

        if (isMobile) {
            setActiveIndex([0]); //for mobile screens to display only one card at a time
        } else {
            // On desktop screens, show three cards at a time starting from the first card
            setActiveIndex([0, 1, 2]);
        }

          const handleResize = () => {
            const isMobileScreen = window.innerWidth < 640;
      
            if (isMobileScreen && !isMobile) {
              // Switching to mobile screen
              setActiveIndex([0]);
            } else if (!isMobileScreen && isMobile) {
              // Switching to desktop screen
              setActiveIndex([0, 1, 2]);
            }
          };
      
          window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [isMobile]);

    useEffect(() =>{

        if (isMobile) {
            const buttons = blogs[0].map((blog, index) => ({
              index: index,
              onClick: () => {},
            }));
            setStatusButtons(buttons);
        } 
        else {
            const val = blogs[0].length % 3 !== 0 ? Math.floor(blogs[0].length / 3) + 1 : blogs[0].length / 3;
            const buttons = Array.from({ length: val }, (_, index) => ({
              index: index,
              onClick: (index) => {
                const val = index*3;
                const arr = [];
                for(let i = val; i < val + 3; i++){
                    arr.push(i);
                }

                setActiveStatus(Math.floor(arr[0]/3));
                setActiveIndex(arr);
              },
            }));
            setStatusButtons(buttons);
        }
        //   console.log(isMobile);
        //   console.log(StatusButtons);

    }, [blogs, isMobile])

    const handlePrevClick = () => {
        setActiveIndex((prevActiveIndex) => {
            const newActiveIndex = [];

            const frontIndex = prevActiveIndex[0];

            const prevIndex = frontIndex - 1;

            // newActiveIndex.pop();

            for(let i = prevIndex; i >= frontIndex - 3; i--)
                newActiveIndex.unshift(i);
            
            setActiveStatus(Math.floor(prevIndex / 3));

            return newActiveIndex;
            
        }) 
        
    }

    const handleNextClick = () => {
        setActiveIndex((prevActiveIndex) => {
            const lastIndex = prevActiveIndex[prevActiveIndex.length - 1];

            const nextIndex = lastIndex + 1;

            if (nextIndex < blogs[0].length) {
                const newActiveIndex = [];

                for(let i = nextIndex; i<blogs[0].length; i++)
                    newActiveIndex.push(i);

                // newActiveIndex.shift();
                setActiveStatus(Math.floor(nextIndex / 3));

                return newActiveIndex;
            }
        }) 
        
    }

    return (  
        <>
            <h2 className='text-4xl font-extrabold my-6 text-center text-[#DE3163]'>{title}</h2>

            <div className='relative'>
                <div 
                    className="w-full flex justify-center gap-6 px-4 mb-10 transition transform "
                    style={{
                        // Apply the transform style based on the activeIndex
                        transform: `translateX(-${activeIndex[0] * 1.0234}%)`, // 33.33% for 3 slides per frame
                        transition: 'transform 1s ease ',
                    }}
                >
                    {blogs[0].map((blog, index)=>(

                        activeIndex.includes(index) && 
                            (<Link key = {blog.id} to = {`/events/${blog.id}`} className="bg-white no-underline hover:no-underline max-w-sm rounded overflow-hidden border  hover:cursor-pointer transform transition duration-500 hover:scale-90 md:w-1/3  w-full">
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
                            
                            </Link>)
                    ))}
                </div>

                {activeIndex[0] > 0 && (<div className='absolute top-1/2 left-0 sm:pl-4 pl-2'>
                    <button className='cursor-pointer' onClick={handlePrevClick}>
                        <img src='/images/left_arrow.svg' className='sm:w-10 w-5 sm:h-10 h-5'/>
                    </button>
                </div>)}

                {activeIndex[activeIndex.length - 1] < blogs[0].length - 1 && (<div className='absolute top-1/2 right-0 pr-4'>
                    <button className='cursor-pointer' onClick={handleNextClick}>
                        <img src='/images/right_arrow.svg' className='sm:w-10 w-5 sm:h-10 h-5'/>
                    </button>
                    {/* <p>{activeIndex[activeIndex.length - 1]}</p> */}
                </div>)}

                <div className='flex justify-center gap-2 mb-5'>
                    {
                        StatusButtons.map((button, index) => (
                            
                                <button key={index} className={`cursor-pointer rounded-full border-2 w-4 h-4 ${active(button.index)}` }onClick={() => button.onClick(index)}>
                                </button>
                            
                            // <p key={index}>{button.index}</p>
                        ))
                    }
                </div>
            </div>
            
        </>
        
    );
}
 
export default BlogList;