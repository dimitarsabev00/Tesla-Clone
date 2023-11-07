import { BrowserRouter as Router } from "react-router-dom";
import RoutesComp from "./components/Routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/generalSlice";
import { auth } from "./configs/firebase";
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <Router>
      <RoutesComp />
    </Router>
  );
};

export default App;
