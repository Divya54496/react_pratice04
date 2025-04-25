import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8873185&lng=77.57807509999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')    
    const json = await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // Conditional Rendering

  const filterResturanList = () => {
    const filteredResturant = listofResturants.filter(
      (res) => res.info.avgRating > 4.5
    );

    setListOfResturants(filteredResturant);
    console.log(filteredResturant);
  };
  return(
  listofResturants && listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <button className="filter-btn" onClick={filterResturanList}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listofResturants.map((resturantData) => (
          <ResturantCard
            key={resturantData?.info?.id}
            resturantData={resturantData}
          />
        ))}
      </div>
    </div>
  )
  );
};

export default Body;
