import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home.js";
import Lists from "./Components/Lists.js";
import Signin from "./Components/Signin.js";
import Signup from "./Components/Signup.js";
import Load from "./imgs/spin.gif";
import { app } from "./Firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProductPage from "./Components/ProductPage.js";
import CartSection from "./Components/CartSection.js";
import Payment from "./Components/Payment.js";
import Profile from "./Components/Profile.js";
import Orders from "./Components/Orders.js";
import Error from "./Components/Error.js";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loading">
          <img src={Load} className="loading-img" />
        </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Signin />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
        {user && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/wishlists" element={<Lists />} />
            <Route path="/cart" element={<CartSection />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<Error/>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
