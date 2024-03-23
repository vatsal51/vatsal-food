import { useFoodContext } from "./foodContext/foodContext";
import FoodItem from "./fooditems";
import Filters from "./filters";
import Modal from "./modal";
import Pagination from "./pagination";
const FoodMenuPage = () => {
  const {
    foodItems,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    handleFoodItemClick,
    prevPage,
    nextPage,
  } = useFoodContext();

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="food-menu">
      <h1>Food Menu</h1>
      <Filters />
      <div className="container">
        <div className="food-items">
          {foodItems.length > 0 ? (
            currentItems.map((foodItem) => (
              <FoodItem
                key={foodItem.idMeal}
                id={foodItem.idMeal}
                name={foodItem.strMeal}
                image={foodItem.strMealThumb}
                handleFoodItemClick={handleFoodItemClick}
                rating={foodItem.rating}
              />
            ))
          ) : (
            <Loading /> // Wrapped Loading component in curly braces
          )}
        </div>
      </div>
      {foodItems.length > 8 ? (
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalItems={foodItems.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
      <Modal />
    </div>
  );
};

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default FoodMenuPage;
