import { useEffect } from 'react';
import ProductsList from '../components/templates/ProductsList';
import DefaultBtn from '../components/module/DefaultBtn';
import {useRecoilState} from 'recoil';
import DataAtom from '../atoms/dataAtom';
import OrdersListAtom from '../atoms/ordersListAtom';
import CartAtom from '../atoms/cartAtom';
import updateCart from '../utils/updateCart';

const Menu = () => {

  const dataStateReciol = useRecoilState(DataAtom);
  const data = dataStateReciol[0];

  const ordersListAtomRecoil = useRecoilState(OrdersListAtom);
  const ordersList = ordersListAtomRecoil[0];
  
  const cartAtomRecoil = useRecoilState(CartAtom);
  const setCart = cartAtomRecoil[1];

  useEffect(() => {

    updateCart(ordersList, setCart);

  },[ordersList , setCart]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center font-Urbanist uppercase bg-slate-100'>
      <div className='w-10/12 h-full flex flex-col justify-center items-center pt-20'>
        <ProductsList title={'Beverages'} data={data.Beverages}/>
        <ProductsList title={'Teas'} data={data.Teas}/>
        <div className='w-4/12 flex flex-row justify-center items-center p-10'>
          <DefaultBtn name={'Go to cart'} path={'/Cart'} />
        </div>
      </div>
    </div>
  );
}

export default Menu;