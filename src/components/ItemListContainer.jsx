import React from "react";

const ItemListContainer = ({ greeting }) => {
  const customStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    margin: "auto",
    width: "100vw",
    height: "80vh",
  };
  return <div style={customStyles}>{greeting}</div>;
};

export default ItemListContainer;
