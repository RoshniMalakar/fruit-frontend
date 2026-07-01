import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Fnavbar from "./Component/Fnavbar";
import axios from "axios";
import Footer from "./Component/Footer";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchCart();
  }, []);
  const fetchCart = async () => {
    try {
      const response = await axios.get(
        "https://fruit-backend-d30x.onrender.com/api/getcart",
      );
      setCart(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "https://fruit-backend-d30x.onrender.com/api/addcart",
        item,
      );
      const newItem = response.data.cart;
      setCart((prev) => {
        const exist = prev.find((cartItem) => cartItem.id === newItem.id);
        if (exist) {
          return prev.map((cartItem) =>
            cartItem.id === newItem.id
              ? { ...cartItem, qty: cartItem.qty + 1 }
              : cartItem,
          );
        }
        return [...prev, { ...newItem, qty: 1 }];
      });
    } catch (error) {
      console.error(error);
    }
  };
  const increaseqty = (item) => {
    setCart(cart.map((s) => (s.id === item.id ? { ...s, qty: s.qty + 1 } : s)));
  };
  const decreaseqty = (item) => {
    if (item.qty === 1) {
      return;
    } else {
      setCart(
        cart.map((s) => (s.id === item.id ? { ...s, qty: s.qty - 1 } : s)),
      );
    }
  };
  const removeFromCart = async (id) => {
    try {
      const response = await axios.delete(
        `https://fruit-backend-d30x.onrender.com/api/deletecart/${id}`,
      );
      setCart(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const checktoken = localStorage.getItem("token");
    setToken(checktoken);
  }, []);
  return (
    <div className={`app ${theme}`}>
      {token ? (
        <Navbar cart={cart} theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <Fnavbar theme={theme} toggleTheme={toggleTheme} />
      )}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseqty={increaseqty}
              decreaseqty={decreaseqty}
              removeFromCart={removeFromCart}
              token={token}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
