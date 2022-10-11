import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element="Search" />
      <Route path="/album/:id" element="Album" />
      <Route path="/favorites" element="Favorites" />
      <Route path="/profile" element="Profile" />
      <Route path="/profile/edit" element="ProfileEdit" />
      <Route path="*" element="NotFound" />
    </Routes>
  );
}
