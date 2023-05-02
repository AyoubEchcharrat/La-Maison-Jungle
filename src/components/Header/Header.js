import React from "react"
import { Link } from "react-router-dom"
import '../../styles/Header.css'
import logo from '../assets/LOGO.svg'
import { useLocation } from "react-router-dom"

export default function Header() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    return <nav className="header">
        <div>
            <img className="header-logo" src={logo} alt='logo Kasa' />
        </div>
        <div className="navbar">
            <Link className={pathname === "/" ? "navbar-link active" : "navbar-link"} to="/">Accueil</Link>
            <Link className={pathname === "/about" ? "navbar-link active" : "navbar-link"} to="/about">A propos</Link>
        </div>
    </nav>
}


