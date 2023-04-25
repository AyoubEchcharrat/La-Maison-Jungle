import React from "react"
import { Link } from "react-router-dom"
import '../../styles/Header.css'
import logo from '../assets/LOGO.svg'

export default function Header() {
    return <nav className="header">
        <div>
            <img className="header-logo" src={logo} alt='logo Kasa' />
        </div>
        <div className="navbar">
            <Link className="navbar-link" to="/">Accueil</Link>
            <Link className="navbar-link" to="/about">A propos</Link>
        </div>
    </nav>
}


