import React from "react";

const ResturantCard = ({resturantData}) =>{

    const{ name , cuisines , avgRating ,costForTwo , cloudinaryImageId} = resturantData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId} alt="res-logo"/>
          
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard;