import React from "react";
import ItemListContainer from "../components/ItemListContainer"
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();

  return (
    <ItemListContainer products={products} ></ItemListContainer>
  );
};

export default Home;
