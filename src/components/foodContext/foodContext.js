import React, { createContext, useContext, useState, useEffect } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (foodItems.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
          );
          const data = await response.json();
          const mealsWithRandomRating = data.meals.map((meal) => ({
            ...meal,
            rating: getRandomRating(3.1, 5.0),
          }));
          setFoodItems(mealsWithRandomRating);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [foodItems]);

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

  function getRandomRating(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  const handleFoodItemClick = async (id) => {
    if (!id) {
      setSelectedFoodItem(null);
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      const myMeal = data.meals[0];
      let ingredients = "";

      for (let i = 1; i <= 15; i++) {
        const ingredient = myMeal[`strIngredient${i}`];
        if (ingredient) {
          ingredients += (ingredients ? ", " : "") + ingredient;
        }
      }
      myMeal.ingredients = ingredients;
      setSelectedFoodItem(myMeal); // Set the selected food item details
    } catch (error) {
      console.error("Error fetching food item details:", error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < Math.ceil(foodItems.length / itemsPerPage)
        ? prevPage + 1
        : prevPage
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const sortAscending = () => {
    const sortedFoodItems = [...foodItems].sort((a, b) => {
      return a.strMeal.localeCompare(b.strMeal);
    });
    setFoodItems(sortedFoodItems);
  };

  const sortDescending = () => {
    const sortedFoodItems = [...foodItems].sort((a, b) => {
      return b.strMeal.localeCompare(a.strMeal);
    });
    setFoodItems(sortedFoodItems);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const applyFilter = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
          selectedArea
        )}`
      );
      const data = await response.json();

      const meals = data.meals || [];
      // Generate random ratings for the filtered meals
      const mealsWithRandomRating = meals.map((meal) => ({
        ...meal,
        rating: getRandomRating(3.1, 5.0),
      }));
      setFoodItems(mealsWithRandomRating);
      setCurrentPage(1); // Set the current page number to 1
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
    toggleDropdown(); // Hide dropdown after applying filter
  };
  const value = {
    foodItems,
    selectedFoodItem,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    handleFoodItemClick,
    nextPage,
    prevPage,
    sortAscending,
    sortDescending,
    selectedArea,
    areas,
    toggleDropdown,
    handleAreaChange,
    applyFilter,
    isDropdownVisible,
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => useContext(FoodContext);
