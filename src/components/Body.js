import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return(
        <div className="body">
            <div className="Search">search</div>
            <div className="restaurent-container">
            {
    resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))
}

            
        </div>
        </div>
    )
}
export default Body;