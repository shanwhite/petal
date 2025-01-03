// Referenced a Tutorial for a 'React Sidebar Navigation Menu using React Router' by Brian Design
// Source: https://youtu.be/zQBd3hNXJgI?si=mgyO1W3JxMBuH2Sc
// Tweaked the code to suit Petal's functionalities
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
    },
    {
        title: "Log out",
        path: "/signup",
        name: "nav-text",
    } 
];