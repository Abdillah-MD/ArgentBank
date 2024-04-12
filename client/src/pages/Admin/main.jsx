import { useDispatch, useSelector } from "react-redux"
import { selectIsAuthenticated, selectToken, selectUser } from "../../redux/selectors/authSelectors"
import "./style.scss"
import UserName from "../../components/UserName/main"
import { useEffect, useState } from "react"
import TransactionCard from "../../components/TransactionCard/main"
import { getUser, updateUserName } from "../../redux/slices/userSlice"
import EditUserName from "../../components/UserEdit/main"

const Admin = () => {
    const dispatch = useDispatch()

    // Utilisation du useSelector pour accéder au token dans le store Redux
    const token = useSelector(selectToken)
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const User = useSelector(selectUser)

    const [edit, setEdit] = useState(false)
    const [editUser, setEditUser] = useState(null)

    const EditMode = () => {
        setEdit(!edit)
    }

    const handleSubmit = () => {
        dispatch(updateUserName(editUser))
    }

    // Utilisation du kook useEffect pour appeler la F° getUserName au 1er render de la page
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch, token])
    return (
        isAuthenticated === null || isAuthenticated === false ? window.location.href = "/sign-in"
        : (
            <main className="adminPage">
                <div className={`adminPage_title ${edit === true ? "hidden" : ""}`}>
                    <h1>Welcome back<br/> {User && <UserName name={`${User?.firstName} ${User?.lastName}`} />} </h1>
                    <button onClick={EditMode} className="edit_button">Edit Name</button>
                </div>
                <EditUserName 
                    show={edit}
                    userNameData={`${User?.userName}`}
                    firstNameData={`${User?.firstName}`}
                    lastNameData={`${User?.lastName}`}
                    handleCancel={EditMode}
                    handleSubmit={handleSubmit}
                    onChange={(e) => {setEditUser(e.target.value)}}
                />
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