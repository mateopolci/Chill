import React, { useState } from "react";
import { useCart } from '../nav/CartContext';

function ItemDetail({item}) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, count);
    setCount(1);
  };

  return (
    <>
      <div className="center flex items-center justify-center border border-solid p-10">
        <div className="m-5 flex h-72 w-72 items-center p-3">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <h3 className="text-xl">{item.brand}</h3>
            <h3 className="text-lg">{`Size ${item.size}`}</h3>
            <div className="my-2 w-96 text-xl">
              <p className="text-justify">{item.description}</p>
            </div>
            <p className="my-2 text-2xl">
              Only {item.stock} remaining!
            </p>
            <p className="text-2xl">${item.price}</p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="flex items-center">
              <button 
                onClick={handleDecrement}
                className="h-8 w-8 rounded-full border-2 border-solid border-black bg-white text-xl font-bold hover:bg-gray-100"
                disabled={count <= 1}
              >
                -
              </button>
              <span className="w-12 text-center text-xl font-bold">
                {count}
              </span>
              <button 
                onClick={handleIncrement}
                className="h-8 w-8 rounded-full border-2 border-solid border-black bg-white text-xl font-bold hover:bg-gray-100"
                disabled={count >= item.stock}
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="hover:bg-dark-green my-5 h-12 w-36 rounded-xl border border-solid border-black bg-light-green hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;