import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // State to manage the visibility of the ItemList
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility on arrow click
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl p-4 bg-gray-100 rounded-md shadow-lg">
      {/* Header Section */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleVisibility}
      >
        <span className="text-lg font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl text-gray-500 transform transition-transform duration-300">
          {isVisible ? "⬆️" : "⬇️"}
        </span>
      </div>

      {/* ItemList Section */}
      {isVisible && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;

/*import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer">
        <span className="text-lg font-semibold text-gray-800">{data.title}({data.itemCards.length})</span>
        <span className="text-xl text-gray-500">⬇️</span>
        <ItemList items={data.itemCards} />
      </div>
      
    );
  };
  
  export default RestaurantCategory;*/
  

/*const RestaurantCategory=({data})=>{
    return <div>
        <span>{data.title}</span>
        <span>⬇️</span>
    </div>
}
export default RestaurantCategory*/