import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createAcount } from "../../redux/slices/userSlice";
import { selectCreateAcountSuccess } from "../../redux/selectors/authSelectors";

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const acountCreateSuccessfully = useSelector(selectCreateAcountSuccess)

    const arrayGenerateInputForm = [
        { label: "First Name", type: "text", name: "firstName", id: "firstName" },
        { label: "Last Name", type: "text", name: "lastName", id: "lastName" },
        { label: "Username", type: "text", name: "userName", id: "username" },
        { label: "Email", type: "email", name: "email", id: "email" },
        { label: "Password", type: "password", name: "password", id: "password" }
    ];

    // Initialiser le state pour pouvoir récupérer les values des inputs
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: "",
    })

    // Pour récupérer la valeur des inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Au submit du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

        const resultAction = await dispatch(createAcount(formData)) // Utilisation de l'action createAsyncThunk
        if (createAcount.fulfilled.match(resultAction)) {
            navigate('/sign-in') // Redirection vers la page admin si la connexion réussit
        }
    }

    return <main className="main_signUp">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign up</h1>
            {acountCreateSuccessfully === false ? <p style={{textAlign: "center", color: "red", fontWeight: "bold"}}> Please complete all fields correctly </p> : null}
            <Form arrayGenerateInputForm={arrayGenerateInputForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
            <p className="sign-up">Already have an account?<br/><Link to="/sign-in">Sign in</Link></p>
        </section>
    </main>
}

export default SignUp