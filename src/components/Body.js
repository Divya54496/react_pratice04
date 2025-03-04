import React from "react";
import ResturantCard from "./ResturantCard";

const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                <p>Search</p>
            </div>
        <div className="res-container">
        {resList.map((resturantData) => (
          <ResturantCard key={resturantData.info.id} resturantData={resturantData} />
        ))}
        </div>
        </div>
    )
}


export default Body;