import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {

  const cart = useSelector((state) => state.cart);
  const [numberProduct, setNumberProduct] = useState(0);

  useEffect(() => {
    setNumberProduct(cart.length);
  }, [cart]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      {numberProduct > 0 && (
        <span
          id="number"
          className="w-5 h-5 text-xl text-orange-400 flex flex-row justify-center items-center absolute -top-3 -right-3 cursor-default"
        >
          {numberProduct}
        </span>
      )}
      <button className="w-full h-full flex flex-row justify-center items-center">
        <Link
          className="w-full h-full text-[2.25rem] text-orange-400"
          to={"/Cart"}
        >
          <HiShoppingCart />
        </Link>
      </button>
    </div>
  );
}

export default CartBtn;