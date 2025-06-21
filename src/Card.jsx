import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, clearcart } from "./AppSlice";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const cartitem = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSinglePayment = (item) => {
    navigate("/pay-one", { state: item });
  };

  const handleadd = (course) => dispatch(add(course));
  const handleRemove = (course) => dispatch(remove(course));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <CheckoutForm /> 
      <button
        onClick={() => dispatch(clearcart())}
        className="bg-[#6d28d2] text-white px-5 py-1 rounded-md text-lg font-normal my-4"
      >
        Clear Cart
      </button>
      {cartitem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartitem.map((item) => (
            <li key={item.id} className="mb-4 border-b pb-4">
              <img className="w-[200px]" src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p className="font-medium">Quantity: {item.quantity}</p>

              <div className="flex gap-4 mt-2">
                <button
                  className="border px-2 py-1 text-green-700 text-xl font-bold"
                  onClick={() => handleadd(item)}
                >
                  +
                </button>
                <button
                  className="border px-2 py-1 text-red-700 text-2xl font-bold"
                  onClick={() => handleRemove(item)}
                >
                  -
                </button>
                <button
                  className="bg-purple-700 text-white px-4 py-1 rounded-md"
                  onClick={() => handleSinglePayment(item)}
                >
                  Pay This Course
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;

