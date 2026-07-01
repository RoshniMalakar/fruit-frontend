import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../Redux/Action";
import { useState } from "react";

function Home({ addToCart }) {
  const { products } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);
  const [search, setSearch] = useState("");
  const searchitem = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="home-page">
      <div className="search">
        <div className="bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="cards">
        {searchitem.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <div className="body">
              <p className="name">{item.name}</p>
              <p>Category: {item.category}</p>
              <p>{item.review}</p>
              <p>{item.desc}</p>
              <p>Rating: {item.rating}</p>
              <p className="price">Rs.{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
