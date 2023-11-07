import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AboutMessage from './AboutMessage';

const TemporaryDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        disablePortal: true,
        container: () => document.body,
        style: { position: 'absolute' },
      }}
    >
      <Box
        sx={{ width: 300 }}
        role="presentation"
        className="w-full h-full flex flex-col justify-start items-start gap-5 font-Urbanist text-slate-200 p-2"
      >
        <h1 className='text-orange-400 text-[1.5rem] font-extrabold cursor-default'>
          Brew Haven
        </h1>
        <div className='flex flex-col justify-center items-start gap-2 font-thin text-black uppercase'>
          <Link
            to={'/'}
            onClick={() => onClose()} 
            className='flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400'>
            Home
          </Link>
          <Link
            to={'/menu'}
            onClick={() => onClose()} 
            className='flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400'>
            Menu
          </Link>
          <button
            onClick={() => {
              onClose();
              AboutMessage();
            }}
            className='flex flex-row justify-center items-center gap-1 text-[0.90rem] uppercase tracking-widest hover:text-orange-400'>
            About
          </button>
          <button
            onClick={() => {
              onClose();
              AboutMessage();
            }}
            className='flex flex-row justify-center items-center gap-1 text-[0.90rem] uppercase tracking-widest hover:text-orange-400'>
            Contact
          </button>
        </div>
      </Box>
    </Drawer>
  );
};

export default TemporaryDrawer;

