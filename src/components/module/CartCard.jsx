import { useDispatch } from "react-redux";
import DefaultPic from "../../assets/default-image.webp";
import { TiDelete } from "react-icons/ti";
import { REMOVE_FROM_CART } from "../../redux/actions/actionsType";

const CartCard = ({ name, number, price }) => {
  
  const dispatch = useDispatch();

  const removeProduct = (name) => {
    dispatch({ type: REMOVE_FROM_CART, name });
  };

  return (
    <div className="w-10/12 flex flex-row justify-between items-center p-2 bg-white shadow font-Urbanist uppercase text-black">
      <div className="w-3/12 h-full">
        <img
          className="w-full h-full"
          src={DefaultPic}
          loading="lazy"
          alt="PRODUCT"
        />
      </div>
      <div className="w-9/12 h-full flex flex-row justify-between items-center px-4">
        <h1 className="font-bold text-2xl max-md:text-base">{name}</h1>
        <p
          id="number"
          className="flex flex-row justify-center items-center gap-1 text-2xl"
        >
          {number}
        </p>
        <p
          id="price"
          className="flex flex-row justify-center items-center gap-1 text-2xl"
        >
          <span className="font-Urbanist text-lg font-thin">$</span>
          {price}
        </p>
        <button className="text-xl" onClick={() => removeProduct(name)}>
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
