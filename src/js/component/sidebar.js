import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    return (
    <div className="sidebar p-4 ps-3">
        <nav>
            <ul className="text-white-50 text-uppercase lh-lg">
                
                <li><NavLink to={"/"} className={`link ${({ isActive }) => isActive ? "active" : ""}`}>Home</NavLink></li>
                <li><NavLink to={"/characters"} className={`link ${({ isActive }) => isActive ? "active" : ""}`}>Characters</NavLink></li>
                <li><NavLink to={"/planets"} className={`link ${({ isActive }) => isActive ? "active" : ""}`}>Planets</NavLink></li>
            </ul>
        </nav>
    </div>
    )
}
