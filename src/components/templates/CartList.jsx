import CartCard from '../module/CartCard';

const CartList = ({ cart }) => {
  return (
    <div className='w-10/12 flex flex-col justify-start items-center gap-5'>
        {
        cart.map(({ id, name, number, price }) => {
            return (
              <CartCard
              key={id}
              name={name}
              number={number}
              price={price}
              />
            );
          })
        }
    </div>
  );
}

export default CartList;