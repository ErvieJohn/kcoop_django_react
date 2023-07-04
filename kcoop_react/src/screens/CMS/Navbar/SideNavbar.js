import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {SidebarData} from './SidebarData';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './SideNavbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

export default function SideNavbar() {
    const [open, setopen] = useState(true);
    const toggleOpen = () => {
        setopen(!open)
    }
  
    return (
        <div className={open?"sidenav":"sidenavClosed"}>
            <button className="menuBtn" onClick={toggleOpen}>
                    {open? <FontAwesomeIcon icon={faArrowLeft} />: <FontAwesomeIcon icon={faBars} />}
            </button>
            {SidebarData.map(item =>{
                return <NavLink key={item.id} className="sideitem" to={item.link}>
                        {item.icon}
                        <span className={open?"linkText":"linkTextClosed"}>{item.text}</span>
                    </NavLink>
            })}
        </div>
    );
  }