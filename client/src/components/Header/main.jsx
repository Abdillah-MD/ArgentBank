import { Link } from "react-router-dom"
import logo from "/images/argentBankLogo.webp"
import './style.scss'
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuthenticated, selectToken, selectUser } from "../../redux/selectors/authSelectors"
import UserName from "../UserName/main"
import { useEffect } from "react"
import { getUser, logout } from "../../redux/slices/userSlice"

const Header = () => {
    // const location = useLocation()
    const dispatch = useDispatch()

    // Récupérer l'état Redux
    const token = useSelector(selectToken)
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const User = useSelector(selectUser)

    // Fonction pour supprimer le token 
    const removeToken = () => {
        dispatch(logout())
    }

    // Utilisation du kook useEffect pour appeler la F° getUserName au 1er render de la page
    useEffect(() => {
        if (isAuthenticated === true) {
            dispatch(getUser())
        }
    }, [dispatch, isAuthenticated, token])

    return (
        <header className="header">
            <Link className="header_logo" to="/accueil">
                <img src={logo} alt="Argent Bank" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header_nav">

                {/* Regarder l'url pour afficher les liens de navigation */}
                {
                    isAuthenticated === true ?
                        <>
                            <Link className="header_nav-link" to="/admin"><i className="fa-solid fa-circle-user"></i> &nbsp;<UserName name={`${User?.userName}`} /></Link>
                            <Link className="header_nav-link" to="/accueil" onClick={removeToken}><i className="fa-solid fa-right-from-bracket"></i>&nbsp; Sign out</Link>
                        </>
                    :<>
                        <Link className="header_nav-link" to="sign-in"><i className="fa-solid fa-circle-user"></i>&nbsp; Sign in</Link>
                    </>

                }
            </nav>
        </header>
    )
}
 
export default Header