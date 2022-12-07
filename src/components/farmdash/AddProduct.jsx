import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import './addItem.css'; 

function AddItem() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

  const [Items, setItems] = useState({
    user_id: auth.token.user.id,
    category_id: '',
    product_name: "",
    price: "",
    quantity: "",
    image_url: "",
    // user_id, :category_id, :product_name, :price, :quantity, :image_url
    
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/products", {
        user_id: Items.user_id,
        category_id: Items.category_id,
      product_name: Items.product_name,
      price: Items.price,
      image_url: Items.image_url,
    //   on_menu: Items.on_menu,
     
   
    });
  }
  function handleChange(e) {
    setItems({ ...Items, [e.target.name]: e.target.value });
  }

  function handleClickDelete(e) {
    fetch(`http://localhost:3000/products/${e.target.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteItem) => handleDelete(deleteItem));
  }
  function handleDelete(deleteItem) {
    let newItems = Items.filter((Items) => Items.id !== deleteItem.id);
    setItems(newItems);
  }

  return (
    <div >
      <form id="addItem" onSubmit={handleSubmit}>
        <h3>Add meal </h3>
        
        <br />
        <label htmlFor="name">Name</label>
        <input
          placeholder="enter the name"
          type="text"
          name="name"
          value={Items.product_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">
          {""}
          price</label>
        <input
          placeholder="enter the price"
          type="text"
          name="price"
          value={Items.price}
          onChange={handleChange}
        />
        <br />
        
        <br />
        <label htmlFor="image">Image</label>
        <input
          placeholder="enter the image_url"
          type="text"
          name="image_url"
          id="image"
          value={Items.image_url}
          onChange={handleChange}
        />
        <br />
      
        <br />
        <label htmlFor="category">Category</label>
        <input
          placeholder="enter the category_id"
          type="text"
          name="category_id"
          value={Items.category_id}
          onChange={handleChange}
        />
        <br />
        {/* <label htmlFor="usertype">user</label>
        <input
          placeholder="enter the user_type"
          type="text"
          name="user_type"
          value={Items.user_type}
          onChange={handleChange}
        /> */}
         <button className='button'>submit</button>
        <button id={Items.id} className="button" onClick={handleClickDelete}>
              Remove
            </button>
      </form>
    </div>
  );
}

export default AddItem;