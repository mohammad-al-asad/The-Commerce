import React from "react";
import { FaStar } from "react-icons/fa";


function Rating({rating}:{rating:any}) {
    
  return (
    <div className="flex mt-2">
      {Array(4)
        .fill(1)
        .map((item,index) => (
          <FaStar className="text-orange-400" key={index} />
        ))}
        <span className="ml-2 text-sm">{`(${rating?.count})`}</span>
    </div>
  );
}

export default Rating;
