import React, { useState, useEffect } from "react";
import ascending from "../ascending-a-z-solid-svgrepo-com.svg";
import filters from "../filters-2-svgrepo-com.svg";
import descending from "../descending-z-a-solid-svgrepo-com.svg";
const Filters = ({
  setFoodItems,
  foodItems,
  sortAscending,
  sortDescending,
}) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        const data = await response.json();
        setAreas(data.meals.map((meal) => meal.strArea));
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };

    fetchAreas();
  }, []);

  const toggleDropdown = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const applyFilter = async () => {
    try {
      if (selectedArea.trim() === "") {
        // If no filter is selected, fetch the default list of food items
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
        );
        const data = await response.json();
        const meals = data.meals || []; // Ensure meals is an array
        console.log("default", meals);
        setFoodItems(meals);
      } else {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
            selectedArea
          )}`
        );
        const data = await response.json();
        const meals = data.meals || []; // Ensure meals is an array
        console.log("filtered", meals);
        setFoodItems(meals);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
    toggleDropdown(); // Hide dropdown after applying filter
  };
  

  return (
    <div className="filters">
      <span className="filter-tag" onClick={toggleDropdown}>
        Filter
        <span className="filters">
          <img src={filters}></img>
        </span>
      </span>
      <span className="filter-tag" onClick={sortAscending}>
        Sort
        <span className="filters">
          <img src={ascending}></img>
        </span>
      </span>
      <span className="filter-tag" onClick={sortDescending}>
        Sort
        <span className="filters">
          <img src={descending}></img>
        </span>
      </span>
      <div className="dropdown">
        <div className="dropdown-content">
          {areas.map((area, index) => (
            <label key={index}>
              <span>
                <svg
                  aria-hidden="true"
                  height="16"
                  width="16"
                  className="sc-gFqAkR bKVXsx"
                  style={{ marginTop: "1px" }}
                >
                  <use href="/core/sprite-2e61ee4e.svg#filledCheckboxSelectedFilled16"></use>
                </svg>
              </span>
              <input
                type="radio"
                value={area}
                checked={selectedArea === area}
                onChange={handleAreaChange}
              />
              {area}
            </label>
          ))}
        </div>
        <button onClick={applyFilter}>Apply</button>
      </div>
    </div>
  );
};

export default Filters;
