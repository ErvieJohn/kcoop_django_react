import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-cms'>
          <Link to='#' className='menu-bars-cms'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div style={{position: "absolute",
        top: "5%",left:"50%", transform: "translate(-50%, -50%)"}}>
            <img
                    src="/static/media/kcoop.png"
                    width="45px"
                    align="center"
                    styles={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "3px",
                    }}
                />
                <a href="/" style={{fontSize: "16px", color: 'white'}}>
                <b > KASAGANA-KA  </b> COOPERATIVE
                    </a>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu-cms active' : 'nav-menu-cms'}>
          <ul className='nav-menu-items-cms' onClick={showSidebar}>
            <li className='navbar-toggle-cms'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose size={25}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='span-cms'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;