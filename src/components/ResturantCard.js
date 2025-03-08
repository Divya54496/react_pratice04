import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = ({resturantData}) =>{

    const{ name , cuisines , avgRating ,costForTwo , cloudinaryImageId} = resturantData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL +
          cloudinaryImageId} alt="res-logo"/>
          
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard;