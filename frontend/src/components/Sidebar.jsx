import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {RiCaravanLine} from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { links, publicLinks } from '../data/Links';
import { useStateContext } from '../contexts/ContextProvider';
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const { isAuthenticated } = useAuth0();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lime-700 text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2' 

  if (!isAuthenticated) {

    return (
      <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && (
          <>
            <div className='flex justify-between items-center'>
                <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                <RiCaravanLine /> <span>DoonBay</span>
                </Link>
                <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-full p-3 text-black hover:bg-light-gray mt-4 block">
                    <MdOutlineCancel />
                  </button>
            </div> 
            <div className='mt-10'>
                {publicLinks.map((item) => (
                  <div key={item.title}>
                    <p className='text-gray-400 m-3 mt-4 uppercase'>
                      {item.title} 
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                      >
                          {link.icon}
                          <span className='capitailize'>
                              {link.name}
                          </span>
                      </NavLink>
                    ))}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    ) 
    


  } else {
    return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
    {activeMenu && (
      <>
        <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <RiCaravanLine /> <span>DoonBay</span>
            </Link>
            <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-full p-3 text-black hover:bg-light-gray mt-4 block">
                <MdOutlineCancel />
              </button>
        </div> 
        <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                  >
                      {link.icon}
                      <span className='capitailize'>
                          {link.name}
                      </span>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
      </>
    )}
  </div>
  ) 


  }
    

}

export default Sidebar