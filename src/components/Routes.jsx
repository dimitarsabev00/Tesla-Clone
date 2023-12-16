/* eslint-disable react/prop-types */
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Account from "../screens/Account";
import Shop from "../screens/Shop";
import ShoppingCart from "../screens/ShoppingCart";

const RoutesComp = () => {
  const currentUser = useSelector(({ generalSlice }) => generalSlice.user);

  const PrivateRoute = ({ children }) => {
    let location = useLocation();
    if (!currentUser)
      return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
    return children;
  };

  const AuthRoute = ({ children }) => {
    let location = useLocation();
    if (currentUser)
      return <Navigate to="/" state={{ from: location }} replace />;
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/auth/sign-in"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/auth/sign-up"
        element={
          <AuthRoute>
            <Register />
          </AuthRoute>
        }
      />
      <Route
        path="/account"
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
      <Route
        path="/shop"
        element={
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        }
      />
      <Route
        path="/shoppingCart"
        element={
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesComp;
