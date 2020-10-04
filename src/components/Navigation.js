import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to="/" activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/countries" activeClassName="active-link">
                        Happiness Index
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeClassName="active-link">
                        All Countries
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
