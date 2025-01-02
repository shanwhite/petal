// followed tutorial from https://youtu.be/zQBd3hNXJgI?si=mgyO1W3JxMBuH2Sc
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { RiLightbulbFill } from "react-icons/ri";

export const NavbarData = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome />,
        name: "nav-text",
    }, 
    {
        title: "Pets",
        path: "/pets",
        icon: <MdOutlinePets />,
        name: "nav-text",
    }, 
    {
        title: "Schedule",
        path: "/schedule",
        icon: <IoCalendar />,
        name: "nav-text",
    },
    {
        title: "Pet Details",
        path: "/details",
        icon: <RiLightbulbFill />,
        name: "nav-text",
    } 
];