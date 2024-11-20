import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/pets" activeStyle>
                        Pets
                    </NavLink>
                    <NavLink to="/schedule" activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to="/reminders" activeStyle>
                        Reminders
                    </NavLink>
                    <NavLink to="/tips" activeStyle>
                        Tips
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;