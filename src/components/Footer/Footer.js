import logo from '../assets/LOGOwhite.svg'
import '../../styles/Footer.css'

export default function Footer() {
    return <div className="footer">
        <img alt="logo KASA" src={logo}></img>
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </div>
}