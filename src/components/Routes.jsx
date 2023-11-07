/* eslint-disable react/prop-types */
import { Route, Routes, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Account from "../screens/Account";

const RoutesComp = () => {
  const currentUser = useSelector(({ generalSlice }) => generalSlice.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/auth/sign-in"
        element={currentUser ? <Navigate to="/account" /> : <Login />}
      />
      <Route
        path="/auth/sign-up"
        element={currentUser ? <Navigate to="/account" /> : <Register />}
      />
      <Route
        path="/account"
        element={!currentUser ? <Navigate to="/auth/sign-in" /> : <Account />}
      />
    </Routes>
  );
};

export default RoutesComp;
