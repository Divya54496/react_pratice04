import React from 'react'
import { useEffect,useState } from 'react'

const ResturantMenu = () => {

    
const [resInfo , setResInfo] = useState([])



useEffect(()=>{
    fetchData()
},[])



const fetchData = async () =>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2235732&lng=84.8501779&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.cuisines);
    
}


  return (
    <div className='menu'>
        <h1>ResturantMenu</h1>
        <ul>
        <li>Biryani</li>    
        </ul>
      
        </div>
  )
}

export default ResturantMenu