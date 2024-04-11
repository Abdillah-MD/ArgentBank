import { useDispatch, useSelector } from "react-redux"
import { selectIsAuthenticated, selectToken, selectUser } from "../../redux/selectors/authSelectors"
import "./style.scss"
import { Link } from "react-router-dom"
import UserName from "../../components/UserName/main"
import { useEffect } from "react"
import TransactionCard from "../../components/TransactionCard/main"
import { getUser } from "../../redux/slices/userSlice"

const Admin = () => {
    const dispatch = useDispatch()
    // Utilisation du useSelector pour accéder au token dans le store Redux
    const token = useSelector(selectToken)
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const User = useSelector(selectUser)


    // Utilisation du kook useEffect pour appeler la F° getUserName au 1er render de la page
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch, token])
    return (
        isAuthenticated === null || isAuthenticated === false ? window.location.href = "/sign-in"
        : (
            <main className="adminPage">
                <div className="adminPage_title">
                    <h1>Welcome back<br/> {User && <UserName name={`${User?.firstName} ${User?.lastName}`} />} </h1>
                    <Link className="edit_button">Edit Name</Link>
                </div>
                <TransactionCard 
                    title="Argent Bank Checking (x8349)" 
                    amount="$2,082.79"
                    balance="Available Balance"
                />
                <TransactionCard 
                    title="Argent Bank Savings (x6712)" 
                    amount="$10,928.42"
                    balance="Available Balance"
                />
                <TransactionCard 
                    title="Argent Bank Credit Card (x8349)" 
                    amount="$184.30"
                    balance="Current Balance"
                />
            </main>
        )
    )
}

export default Admin