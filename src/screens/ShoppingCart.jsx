import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/slices/generalSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(
    ({ generalSlice }) => generalSlice.shoppingCart
  );

  const removeFromCart = (id) => {
    dispatch(removeProduct({ id }));
  };

  const CartList = (
    <>
      <h2 className="text-3xl">Cart</h2>
      <ul className="list-none p-0">
        {shoppingCart?.map((item) => (
          <li key={item.id} className="my-[20px]">
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="border border-solid border-black bg-transparent px-[8px] py-[16px] cursor-pointer text-black mt-[10px] transition-colors duration-300 hover:bg-black hover:text-white rounded-md"
        onClick={() => {}}
      >
        Buy Everything
      </button>
    </>
  );

  return (
    <div className=" ">
      <Header />
      <div className="h-screen grid place-items-center">
        {shoppingCart?.length > 0 ? (
          CartList
        ) : (
          <div>There are no items in the cart.</div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
