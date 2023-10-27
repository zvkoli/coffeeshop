import { useState } from "react";
import { Link } from 'react-router-dom';
import TemporaryDrawer from "./TemporaryDrawer";
import CartBtn from "./CartBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const [isOpen , setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-20 w-full flex flex-row justify-between items-center absolute top-0  shadow font-Urbanist uppercase px-14 bg-white text-black/80">
        <Link to={'/'} className='h-full flex flex-row justify-start items-center font-bold text-3xl hover:text-orange-400'>
          Brew Haven
        </Link>
        <div className="h-full w-1/2 flex flex-row justify-end items-center gap-4">
          <CartBtn />
          <button
          className="text-[2.5rem] text-orange-400"
          onClick={toggleDrawer(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>
          <TemporaryDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={handleCloseDrawer}
          />
        </div>
    </header>
  );
}

export default Header;