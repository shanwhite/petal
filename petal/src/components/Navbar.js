// followed tutorial from https://youtu.be/zQBd3hNXJgI?si=mgyO1W3JxMBuH2Sc
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import "../index.css";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState([]);
    function showSidebar() {    // refer to lab 4 (toggleDisplay function)
        setSidebar(!sidebar);   // onClick -> sets sidebar as opposite value (true/false)
    };

    return (
        <>
            {/* provider allows you to set default properties for all icons*/}
            <IconContext.Provider value={{ color: "undefined"}}>
                {/* navbar is the horizontal bar on top */}
                <div className="navbar">
                    {/* hamburger menu icon at top left, links to showSidebar function (displays navbar) */}
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                {/* implements nav-menu active css if sidebar is shown, else nav-menu css */}
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    {/* navbar elements, toggles navbar display (on/off) when a link is clicked */}
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        {/* cross icon at top left when navbar is displayed */}
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {NavbarData.map((item, index) => {
                            return (
                                <div className="tabs">
                                    {/* list of pages (home, pets, schedule, tips) */}
                                    <li key={index} className={item.name}>
                                        <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                        </Link>
                                    </li>
                                </div>
                                
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;