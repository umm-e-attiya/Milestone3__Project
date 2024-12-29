// pages/cart/index.js

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


const Cart = () => {
  const [cartData, setCartData] = useState<any[]>([]);
 
  

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      setCartData(JSON.parse(savedCartData));
    }
  }, []);


  
  

  const removeFromCart = (id: string) => {
    const updatedCart = cartData.filter((item: any) => item.id !== id);
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartData.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartData.map((product: any) => (
            <div key={product.id} className="border rounded overflow-hidden shadow-lg">
              <Image
                src={product.image || "/noting"}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-700 mt-2">
                Price: {product.price} 
                  </p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded mt-4"
                >
                  Remove
                </button>
              </div>
                 
            </div>
               
          ))}
        </div>
         
      )}
      <div>
           
            </div>
    </div>
  );
};

export default Cart;
