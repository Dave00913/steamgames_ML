import React from "react";
import bgimg from "../Assets/bgimg.jpeg";

const hero = () => {
    return (
        <div className='p-4'>
                <div className='relative'>
                        {/*Overlay*/}
                        <div className='absolute w-full h-full text-gray-200 '>
                                <h1 className="text-4xl font-bold text-white py-6">UWWWUUUUU </h1>
                        
                        </div>
             <img src={bgimg} />
                </div>
        </div>
    )
}

export default hero;
