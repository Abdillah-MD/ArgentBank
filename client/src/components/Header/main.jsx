import { Link, useLocation } from "react-router-dom"
import logo from "/images/argentBankLogo.png"
import './style.scss'
import { useSelector } from "react-redux"
import { selectIsAuthenticated, selectToken } from "../../redux/selectors/authSelectors"
import UserName from "../UserName/main"
import { useEffect, useState } from "react"

const Header = () => {
    const location = useLocation()
    const [data, setData] = useState()

    // Récupérer l'état Redux
    const token = useSelector(selectToken)
    const isAuthenticated = useSelector(selectIsAuthenticated)

    // Fonction pour supprimer le token 
    const removeToken = () => {
        sessionStorage.removeItem("isAuthenticated")
        sessionStorage.removeItem("Token")
    }

    // Appelle API pour récupérer le nom de l'utilisateur
    const getUserName = async () => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {"Authorization": `Bearer ${sessionStorage.getItem("Token")}`}
            })

            setData( await response.json())

        } catch (err) {
            console.log(err)
        }
    }

    // Utilisation du kook useEffect pour appeler la F° getUserName au 1er render de la page
    useEffect(() => {
        getUserName()
    }, [token, isAuthenticated])

    return (
        <header className="header">
            <Link className="header_logo" to="/accueil" onClick={removeToken}>
                <img src={logo} alt="Argent Bank" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header_nav">

                {/* Regarder l'url pour afficher les liens de navigation */}
                
                {location.pathname === "/admin" || location.pathname === "/admin/user"
                    ? <>
                        <Link className="header_nav-link" to="/admin/user"><i className="fa-solid fa-circle-user"></i> {data && <UserName name={data.body.firstName} />}</Link>
                        <Link className="header_nav-link" to="/accueil" onClick={removeToken}><i className="fa-solid fa-right-from-bracket"></i> Sign out</Link>
                    </> 
                    : <Link className="header_nav-link" to="sign-in"><i className="fa-solid fa-circle-user"></i> Sign in</Link>
                }
            </nav>
        </header>
    )
}
 
export default Header