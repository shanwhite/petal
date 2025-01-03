// followed tutorial from https://youtu.be/zQBd3hNXJgI?si=mgyO1W3JxMBuH2Sc
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { RiLightbulbFill } from "react-icons/ri";

export const NavbarData = [
    {
        title: "Home",
        path: "/home",
        icon: <FaHome />,
        name: "nav-text",
    }, 
    {
        title: "My Pets",
        path: "/pets",
        icon: <MdOutlinePets />,
        name: "nav-text",
    }, 
    {
        title: "My Schedule",
        path: "/schedule",
        icon: <IoCalendar />,
        name: "nav-text",
    },
    {
        title: "Pet Details",
        path: "/details",
        icon: <RiLightbulbFill />,
        name: "nav-text",
    },
    {
        title: "Log out",
        path: "/signup",
        name: "nav-text",
    } 
];