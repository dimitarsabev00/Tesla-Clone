import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const shoppingCart = useSelector(
    ({ generalSlice }) => generalSlice.shoppingCart
  );

  const CartList = (
    <>
      <h2 className="text-3xl">Cart</h2>
      <ul className="list-none p-0">
        {shoppingCart?.map((item) => (
          <li key={item.id} className="my-[20px]">
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => {}}>Remove From Cart</button>
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
