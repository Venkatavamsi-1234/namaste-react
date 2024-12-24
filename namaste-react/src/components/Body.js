import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
    import { useState } from "react";
const Body = () => {
    const [ListofRestaurants,setListofRestaurants]=useState(resList);

    return(
        <div className="body">
           <div className="filter">
    <button
        className="filter-button"
        onClick={() => {
            const filteredList = ListofRestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setListofRestaurants(filteredList);
        }}
    >
        Top Rated Restaurants
    </button>
</div>

            <div className="restaurent-container">
            {
    ListofRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))
}

            
        </div>
        </div>
    )
}
export default Body;