"use client"
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <div className='flex ml-0 px-32  mt-3 border-[1px] border-black'>
      <button onClick={decrementQuantity}>-</button>
      <span className='mx-11'>{quantity}</span>
      <button onClick={incrementQuantity}>+</button>
    </div>
  );
};

export default Counter;
