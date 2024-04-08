import { useSelector } from "react-redux"
import { selectIsAuthenticated, selectToken } from "../../redux/selectors/authSelectors"
import "./style.scss"
import { Link } from "react-router-dom"
import UserName from "../../components/UserName/main"
import { useEffect, useState } from "react"
import TransactionCard from "../../components/TransactionCard/main"

const Admin = () => {
    const [name, setName] = useState()
    // Utilisation du useSelector pour accéder au token dans le store Redux
    const token = useSelector(selectToken)
    const isAuthenticated = useSelector(selectIsAuthenticated)
    console.log(token)

    // 
    // Appelle API pour récupérer le nom de l'utilisateur
    const getUserName = async () => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {"Authorization": `Bearer ${sessionStorage.getItem("Token")}`}
            })

            setName( await response.json())

        } catch (err) {
            console.log(err)
        }
    }

    // Utilisation du kook useEffect pour appeler la F° getUserName au 1er render de la page
    useEffect(() => {
        getUserName()
    }, [token])
    return (
        isAuthenticated === null || isAuthenticated === false ? window.location.href = "/sign-in"
        : (
            <main className="adminPage">
                <div className="adminPage_title">
                    <h1>Welcome back<br/> {name && <UserName name={`${name.body.firstName} ${name.body.lastName}`} />} </h1>
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