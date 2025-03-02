import React from "react"
import ReactDOM from "react-dom/client"



const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [  {
    "info": {
      "id": "237665",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/316aa1ca-415a-4a75-aace-a79130d4915f_237665.jpg",
      "locality": "Preatige Tech park",
      "areaName": "Kadubeesanahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "8.4K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-03-03 03:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-0941f2a3-0417-44b4-90d3-8248217d1900"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-preatige-tech-park-kadubeesanahalli-rest237665",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "17303",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5fba4a0b-eb15-4c54-8d58-2a5cb562ab8c_17303.JPG",
      "locality": "Thubarahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "39K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-03-03 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-0941f2a3-0417-44b4-90d3-8248217d1900"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/kfc-thubarahalli-marathahalli-rest17303",
      "type": "WEBLINK"
    }
  },]
//Re -usable component
const ResturantCard = ({resturantData}) =>{

    const{ name , cuisines , avgRating ,costForTwo , cloudinaryImageId} = resturantData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://b.zmtcdn.com/data/pictures/4/21201484/dea7f4d9c06fe49ed7d5c96e41631eae.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"+ cloudinaryImageId} alt="res-logo"/>
    
        <h4>{name}</h4>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}



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


const AppLayout = () =>{
    return (
        <div className="App">
        <Header/>
        <Body/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)