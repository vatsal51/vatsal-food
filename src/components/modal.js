import React from "react";
import close from "../cross-circle-svgrepo-com.svg";
import { useFoodContext } from "./foodContext/foodContext";
const Modal = () => {
  const { selectedFoodItem, handleFoodItemClick } = useFoodContext();
  const modalClass = selectedFoodItem ? "modal show" : "modal"; 

  return (
    <>
      <div className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleFoodItemClick()}>
            <img src={close} alt="close button"></img>
          </span>
          {selectedFoodItem && (
            <>
              <img
                src={selectedFoodItem.strMealThumb}
                className="modal-img"
                alt={selectedFoodItem.strMeal}
              />
              <h2>{selectedFoodItem.strMeal}</h2>
              <p>Category: {selectedFoodItem.strCategory}</p>
              <p>Ingredients: {selectedFoodItem.ingredients}</p>
            </>
          )}
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default Modal;
