import React from 'react';
import icon from '.././assets/images/icon.svg';
import { SlSocialGithub } from 'react-icons/sl';
import { TbSun, TbSunOff } from 'react-icons/tb';
import { FaDiscord, FaHome } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Modal from './Modal';

type IHeader = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<IHeader> = ({ theme, setTheme }) => {
  const [burger, setBurger] = React.useState<boolean>(false);
  const [isVisible, setVisible] = React.useState<boolean>(false);
  return (
    <header className={theme ? 'dark sticky top-0' : 'sticky top-0'}>
      <div className='dark:bg-[#1F2937] bg-white'>
        <nav className=' flex items-center justify-between mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5'>
          <a className='flex items-center' href='#'>
            <img className='mr-3 h-9' src={icon} alt='' />
            <span className='text-xl text-gray-800 font-semibold dark:text-gray-100 transition-all hover:text-black dark:hover:text-white'>
              Weather App
            </span>
          </a>
          <div className='hidden lg:flex'>
            <ul className='flex font-medium space-x-8 dark:text-gray-200 text-gray-700'>
              <li className='block'>
                <a
                  className='hover:text-[#1956db] transition-all dark:hover:text-white text-sm block pr-4 pl-3'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='block'>
                <a
                  className='hover:text-[#1956db] transition-all text-sm
            dark:hover:text-white block pr-4 pl-3'
                  href='#'
                >
                  Search
                </a>
              </li>
              <li className='block'>
                <a
                  className='hover:text-[#1956db]
            dark:hover:text-white  transition-all text-sm block pr-4 pl-3'
                  href='#'
                >
                  Saved
                </a>
              </li>
              <li className='block'>
                <a
                  className='hover:text-[#1956db]
            dark:hover:text-white transition-all text-sm block pr-4 pl-3'
                  href='#'
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex space-x-3'>
              <button>
                <a href='https://github.com/chernyshevartemiy' target='_blank'>
                  <SlSocialGithub
                    className='h-5 w-6
        transition-all dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer'
                  />
                </a>
              </button>
              <button>
                <a
                  href='https://discord.com/users/339701172564656128'
                  target='_blank'
                >
                  <FaDiscord
                    className='h-5
        transition-all w-6 text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900'
                  />
                </a>
              </button>
              <button onClick={() => setTheme(!theme)}>
                <TbSunOff
                  className='h-5 w-6 dark:text-gray-400
          transition-all text-gray-700 dark:hover:text-gray-100 hover:text-gray-900'
                />
              </button>
            </div>
            <button
              className='text-white
            hidden
            sm:block
          bg-[#1956db]
          hover:bg-[#0e48c5]
            transition-all focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none ml-2 
            '
              onClick={() => setVisible((prev) => !prev)}
            >
              Get started
            </button>

            <button
              onClick={() => setBurger((prev) => !prev)}
              className='p-2 block lg:hidden text-white rounded-lg hover:bg-gray-700
      transition-all focus:outline-none focus:ring-2 focus:ring-gray-300'
            >
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
              </svg>
            </button>
          </div>
        </nav>
        {burger && (
          <div className='text-gray-100 max-w-screen-xl mx-auto block lg:hidden font-semibold fixed w-full'>
            <ul className='flex-col px-4 bg-[#1F2937] w-full'>
              <li className='py-2 hover:text-[#1956db] w-full cursor-pointer transition-all'>
                <button className='flex items-center space-x-2'>
                  <FaHome />
                  <span>Home</span>
                </button>
              </li>
              <li className='py-2 hover:text-[#1956db] w-full cursor-pointer transition-all'>
                <button className='flex items-center space-x-2'>
                  <FiSearch />
                  <span>Search</span>
                </button>
              </li>
              <li className='py-2 hover:text-[#1956db] w-full cursor-pointer transition-all'>
                <button className='flex items-center space-x-2'>
                  <VscLibrary />
                  <span>Saved</span>
                </button>
              </li>
              <li className='py-2 hover:text-[#1956db] w-full cursor-pointer transition-all'>
                <button className='flex items-center space-x-2'>
                  <AiOutlineInfoCircle />
                  <span>About</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Modal isVisible={isVisible} setVisible={setVisible} />
    </header>
  );
};
