import React from "react";
import { useState, useEffect } from "react";
import Movies from "./movies";
import { Link } from "react-router-dom";
import "../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {removeItem, clearCart} from "../../redux/cartSlice"

const CartPage = () => {
  // const [cartCount, setCartCount] = useState(0);
  // const [cartItem, setCartItem] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
    // const countValue = localStorage.getItem("cartCount");
    // const getCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // setCartCount(countValue);
    // setCartItem(getCartItems);

    // if (cartItem.length <= 1) {
    //   setIsVisible(false);
    // } else {
    //   setIsVisible(true)
    // }
  //   cartItem.length > 1 ? setIsVisible(true) : setIsVisible(false);
  // }, []);
  // console.log(cartItem.length);

  // useEffect(() => {
  //   setIsVisible(cartItem.length > 1);
    
  // }, [cartItem]);

  // Done on May 26 2025..................................//
  // const handleDelete = (idToDelete) => {
  //   const updatedItems = cartItem.filter((item) => item.id !== idToDelete);
  //   setCartItem(updatedItems);
  //   setCartCount(updatedItems.length);
  //   localStorage.setItem("cart", JSON.stringify(updatedItems));
  //   localStorage.setItem("cartCount", updatedItems.length.toString());
  // };

  //

  // const handleDelete = (idToDelete) => {
  //   cartItem.splice((item) =>
  //     item.id === idToDelete
  //   )
  // }
  const dispatch = useDispatch()
  const deleteAllItems = () => {
    // localStorage.removeItem("cart");
    // localStorage.removeItem("cartCount");
    // setCartCount(0);
    // setCartItem([]);
    dispatch(clearCart())
    setIsVisible(false);
  };

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems)
  // const handleDelete = (idToDelete) => {
  //   const updatedItems = cartItems.filter((item) => item.id !== idToDelete);
  
  // } 

 
  const handleDelete = (id)=> {
    dispatch (removeItem(id))
  }



  return (
    <div>
      <button className="addcart">
        <div>
          <img src="/images/cart-icon.png" alt="cart" width="30" />
        </div>
        <div className="cartcount">{cartItems.length}</div>
      </button>

      <div className="row">
        <div className="browse-movie-wrap">
          {/* {cartItem.map((movie) => (
            <Link
              to={`/movieSpec/${movie?.id}`}
              className="browse-movie-link"
              key={movie.id}
            >
              <Movies
                imageurl={movie.image}
                name={movie.title}
                price={movie.price}
                year={movie.year}
                rating={movie.rating}
                showDeleteButton={true}
                onDeleteCart={() => handleDelete(movie.id)}
                // id = {movie.id}
              />
            </Link>
          ))} */}
          {
            cartItems.map((movie) => (
          <Link
              to={`/movieSpec/${movie?.id}`}
              className="browse-movie-link"
              key={movie.id}
            >
              <Movies
                imageurl={movie.large_cover_image}
                name={movie.title}
                price={movie.price}
                year={movie.year}
                rating={movie.rating}
                showDeleteButton={true}
                onDeleteCart={() => handleDelete(movie.id)}
                // id = {movie.id}
              />
            </Link>
            ))
          }
        </div>
      </div>

      <div className="deleteMain">

      
      {isVisible && (
        <button
          className="deleteAll"
          onClick={() => {
            deleteAllItems();
          }}
        >
          Delete All
        </button>
      )}
      </div>

    </div>
  );
};

export default CartPage;
