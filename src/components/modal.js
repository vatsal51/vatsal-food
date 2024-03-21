import React from "react";
import close from "../cross-circle-svgrepo-com.svg";
const Modal = ({ isOpen, onClose, foodItem }) => {
  const modalClass = isOpen ? "modal show" : "modal"; // Add the "show" class if isOpen is true

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          <img src={close}></img>
        </span>
        {foodItem && (
          <>
            <img
              src={foodItem.strMealThumb}
              className="modal-img"
              alt={foodItem.strMeal}
            />
            <h2>{foodItem.strMeal}</h2>
            <p>Category: {foodItem.strCategory}</p>
            <p>Ingredients: {foodItem.ingredients}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
