import React from "react";
import Header from "../components/Header";
import model3 from "../assets/images/model-3.jpg";
import modelS from "../assets/images/model-s.jpg";
import modelX from "../assets/images/model-x.jpg";
import modelY from "../assets/images/model-y.jpg";
import Product from "../components/Product";
const Shop = () => {
  const products = [
    {
      id: 1,
      image: model3,
      title: "Model 3",
      description: "Description of Product 1",
      price: 19.99,
    },
    {
      id: 2,
      image: modelS,
      title: "Model S",
      description: "Description of Product 2",
      price: 29.99,
    },
    {
      id: 3,
      image: modelX,
      title: "Model X",
      description: "Description of Product 3",
      price: 39.99,
    },
    {
      id: 4,
      image: modelY,
      title: "Model Y",
      description: "Description of Product 4",
      price: 49.99,
    },
  ];

  return (
    <>
      <Header />

      <h1 className="text-center uppercase mt-[48px] font-bold">Products</h1>
      <div className="flex flex-row gap-5 flex-wrap justify-center mt-5">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
