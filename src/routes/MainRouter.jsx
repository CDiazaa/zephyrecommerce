import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NavBarComponent from "../components/Navbar";


const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent></NavBarComponent>
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="/item/:id" element= {<Item/>}></Route>
      <Route path="/category/:id" element= {<Category/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};

export default MainRouter;
