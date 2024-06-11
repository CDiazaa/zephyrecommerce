import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import useProductsByCategory from "../hooks/useProductsByCategory";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { products } = useProductsByCategory(id);
  return <ItemListContainer products={products} />;
};

export default Category;
