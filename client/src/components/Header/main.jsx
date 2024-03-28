import { Link } from "react-router-dom"
import logo from "/images/argentBankLogo.png"
import './style.scss'

const Header = () => {
    return (
        <header className="header">
            <Link className="header_logo" to="/accueil" ><img src={logo} alt="Argent Bank" /></Link>
            <nav className="header_nav">
                <Link className="header_nav-link" to=""><i className="fa-solid fa-circle-user"></i> Sign in</Link>
                <Link className="header_nav-link" to=""><i className="fa-solid fa-right-from-bracket"></i> Sign out</Link>
            </nav>
        </header>
    )
}
 
export default Header