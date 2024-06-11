import React from "react";
import useProducts from "../hooks/useProducts";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css';
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const customStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    margin: "auto",
    width: "100vw",
    height: "10vh",
  };

  const { products } = useProducts();

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </div>
            <Button as={Link} to={`/item/${product.id}`} variant="primary" className="mt-auto">
              Más detalles
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <>
      <h1 style={customStyles}>{greeting}</h1>
      <div className="grid-container">
        {renderProducts()}
      </div>
    </>
  );
};

export default ItemListContainer;
