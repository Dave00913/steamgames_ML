import React from "react";
import { data } from "../Data/data.jsx";


const games = () => {
 

  return (
    <div>
      <h1 className="text-red-600 text-2xl font-bold text-center">
        Top Rated Games
      </h1>

      <div className="grid grid-cols-5 gap-4 pt-8">
        {data.map((item, index) => (
          <div key={index} className=" hover:scale-105 duration-300">
            <img src={item.image} alt={item.image} 
            className="w-full h-[200px] object-cover rounded-t-lg rounded-b-lg"
            />
            <div>
                <p className="text-white">{item.name}</p>
                <p>
                    <span className="text-white">
                        {item.price}
                    </span>
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default games;
