import { Link, useLocation } from "react-router-dom"
import logo from "/images/argentBankLogo.png"
import './style.scss'

const Header = () => {
    const location = useLocation()

    return (
        <header className="header">
            <Link className="header_logo" to="/accueil" >
                <img src={logo} alt="Argent Bank" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header_nav">

                {/* Regarder l'url pour afficher les liens de navigation */}
                
                {location.pathname === "/admin" || location.pathname === "/admin/user"
                    ? <>
                        <Link className="header_nav-link" to="/admin/user"><i className="fa-solid fa-circle-user"></i> Name</Link>
                        <Link className="header_nav-link" to="/accueil"><i className="fa-solid fa-right-from-bracket"></i> Sign out</Link>
                    </> 
                    : <Link className="header_nav-link" to="sign-in"><i className="fa-solid fa-circle-user"></i> Sign in</Link>
                }
            </nav>
        </header>
    )
}
 
export default Header