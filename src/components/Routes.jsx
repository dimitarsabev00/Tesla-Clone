/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router";
import Login from "../screens/Login";
import Home from "../screens/Home";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesComp;
