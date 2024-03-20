import React from "react";

const FoodItem = ({ id, name, image, ratings, onClick }) => {
  const handleFoodItemClick = () => {
    onClick(id); // Pass the id of the clicked food item to the parent component
  };

  return (
    <div className="food-item" onClick={handleFoodItemClick}>
      <img className="food-img" src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default FoodItem;
