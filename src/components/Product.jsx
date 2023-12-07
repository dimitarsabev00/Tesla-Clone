/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/slices/generalSlice";

function Product({ image, title, description, price, id }) {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    const product = {
      id,
      title,
      price,
    };

    dispatch(addProduct(product));
  };

  return (
    <div className="flex flex-col items-center text-center mb-[20px] p-[20px] border border-solid border-gray-300 rounded-md flex-initial w-full md:w-1/4 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-[400px] h-[400px] object-cover mb-[10px]"
      />
      <h2 className="text-base mb-[10px]">{title}</h2>
      <p className="mb-[10px]">{description}</p>
      <p className="font-bold">{`$ ${price}`}</p>
      <button
        onClick={handleAddProduct}
        className="border border-solid border-gray-300 rounded-md bg-transparent cursor-pointer  mt-5 px-[12px] py-[6px]"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
