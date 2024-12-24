import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gray-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex w-full max-w-4xl border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-all transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-l-lg">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between p-4 flex-grow">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.card.info.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.card.info.description || "No description available"}
              </p>
            </div>

            {/* Price and Add Button */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">
                ₹{(item.card.info.price / 100).toFixed(2)}
              </span>
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-500 transition">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
