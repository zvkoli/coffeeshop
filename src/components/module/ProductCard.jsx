import { useSelector, useDispatch } from "react-redux";
import DefaultPic from '../../assets/default-image.webp';
import { HiPlusSm , HiMinusSm } from "react-icons/hi";
import { addToOrderList } from '../../redux/actions/addToOrderListAction';
import { removeFromOrderList } from '../../redux/actions/removeFromOrderListAction';

const ProductCard = ({ name , price , id }) => {

  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.ordersList);

  const product = {
    id,
    name,
    price,
    number: 1
  };

  const addToCart = () => {
    dispatch(addToOrderList(product));
  };

  const removeToCart = () => {
    dispatch(removeFromOrderList(name));
  };

  return (
    <div className='w-[17rem] flex flex-col justify-center items-center gap-2 bg-white font-Urbanist uppercase text-black'>
      <div className='w-full p-1'>
          <img className='w-full h-full' src={DefaultPic} loading='lazy' alt='PRODUCTPHOTO' />
      </div>
      <div className='w-10/12 h-24 flex flex-col justify-between items-start'>
        <h1 className='font-extrabold text-xl cursor-default'>
            {name}
        </h1>
        <p id='price'className='flex flex-row justify-center items-center gap-1 text-2xcursor-default'>
            <span className='font-Urbanist uppercase text-lg'>$</span>
            {price}
        </p>
      </div>
      <div className='w-full flex flex-row justify-start items-center border-2 border-x-0 border-b-0 border-t-CCE3DE'>
        <div className='w-full flex flex-row justify-between items-center px-5 py-2'>
          <div className='flex flex-row justify-center items-center'>
            <button
            className='w-10 h-10 flex flex-row justify-center items-center text-xl focus:bg-inherit'
            onClick={() => addToCart()}>
                <HiPlusSm />
            </button>
            <button
            className='w-10 h-10 flex flex-row justify-center items-center text-xl focus:bg-inherit'
            onClick={() => removeToCart(name)}>
                <HiMinusSm />
            </button>
          </div>
          <div>
            <p id='number' className='text-xl cursor-default'>
              {ordersList.filter(item => item.name === name).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;