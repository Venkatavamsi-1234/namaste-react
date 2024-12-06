import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        locality,
        deliveryTime}=resData.info;
    return (
        <div className="res-card">
           <img 
    className="res-logo" 
    alt="res-logo" 
    src={CDN_URL
         + 
        resData.info.cloudinaryImageId
    }
/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{locality}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
export default RestaurantCard;