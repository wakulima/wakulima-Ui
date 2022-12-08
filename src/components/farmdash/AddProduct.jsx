import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import './addItem.css'; 

function AddItem() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

  const [Items, setItems] = useState({
    // user_id: "",
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
        // user_id: Items.user_id,
        category_id: Items.category_id,
      product_name: Items.product_name,
      price: Items.price,
      quantity: Items.quantity,
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

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Add Products Here </h1>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="product name"
                      value={Items.product_name}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Product Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="category"
                      name="category"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Category"
                      onChange={handleChange}
                      value={Items.category_id}
                      required
                    />
                    <label
                      htmlFor="category"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Category
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="price"
                      name="price"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Price"
                      value={Items.price}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="price"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Price
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="quantity"
                      name="quantity"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="quantity"
                      onChange={handleChange}
                      value={Items.quantity}
                      required
                    />
                    <label
                      htmlFor="quantity"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Quantity
                    </label>
                  </div>

                  
                   

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="image"
                      name="image"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="image"
                      value={Items.image_url}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="image"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Image
                    </label>
                  </div>

                  
                  <div className="relative">
                    <button className="bg-green-500 text-white rounded-md px-2 py-1">
                    Add Product
                   
                    </button>
                  
               
                  </div>
                  <div className="relative">
                    <button className="bg-green-500 text-white rounded-md px-2 py-1" id={Items.id} onClick={handleClickDelete}>
                    Delete
                   
                    </button>
                  
               
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default AddItem;