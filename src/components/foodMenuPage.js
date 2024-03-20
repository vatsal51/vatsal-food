import React, { useState, useEffect } from "react";
import FoodItem from "./fooditems"; // Assuming you have a FoodItem component
import Filters from "./filters";
import Modal from "./modal";
import leftArrow from "../left-arrow-circle-svgrepo-com.svg";

const FoodMenuPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
        );
        const data = await response.json();
        console.log("indian", data);
        setFoodItems(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFoodItemClick = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log("food id", data.meals[0]);
      setSelectedFoodItem(data.meals[0]); // Set the selected food item details
    } catch (error) {
      console.error("Error fetching food item details:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedFoodItem(null); // Close the modal
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Set the current page number
  };

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Indian Food Menu</h1>
      <Filters setFoodItems={setFoodItems} />
      <div className="container">
        <div className="food-items">
          {currentItems.map((foodItem) => (
            <FoodItem
              key={foodItem.idMeal}
              id={foodItem.idMeal}
              name={foodItem.strMeal}
              image={foodItem.strMealThumb}
              ratings={foodItem.ratings}
              onClick={handleFoodItemClick} // Pass the click handler
            />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          {[
            ...Array(Math.min(3, Math.ceil(foodItems.length / itemsPerPage))),
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              paginate(
                currentPage <
                  Math.min(3, Math.ceil(foodItems.length / itemsPerPage))
                  ? currentPage + 1
                  : Math.min(3, Math.ceil(foodItems.length / itemsPerPage))
              )
            }
          >
            Next
          </button>
        </div>
      </div>
      <Modal
        isOpen={selectedFoodItem !== null}
        onClose={handleCloseModal}
        foodItem={selectedFoodItem}
      />
    </div>
  );
};

export default FoodMenuPage;
