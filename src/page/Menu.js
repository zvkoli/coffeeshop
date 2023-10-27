import { useEffect } from "react";
import ProductsList from "../components/templates/ProductsList";
import DefaultBtn from "../components/module/DefaultBtn";
import updateCart from "../utils/updateCart";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from '../redux/actions/cartAction';

const Menu = () => {

  const dispatch = useDispatch();
  
  const { Beverages, Teas } = useSelector((state) => state.data);
  const ordersList = useSelector((state) => state.ordersList);

  useEffect(() => {
    updateCart(ordersList, dispatch, setCart)
  },[ordersList, dispatch]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-Urbanist uppercase bg-slate-100">
      <div className="w-10/12 h-full flex flex-col justify-center items-center pt-20">
        <ProductsList title={"Beverages"} data={Beverages} />
        <ProductsList title={"Teas"} data={Teas} />
        <div className="w-4/12 flex flex-row justify-center items-center p-10">
          <DefaultBtn name={"Go to cart"} path={"/Cart"} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
