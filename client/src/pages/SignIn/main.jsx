import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../callAPI/callAPI"
import { selectCreateAcountSuccess, selectError } from "../../redux/selectors/authSelectors";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector(selectError)
    const acountCreateSuccessfully = useSelector(selectCreateAcountSuccess)

    // Input à injecter dans la page
    const arrayGenerateInputForm = [
        { label: "Username", type: "email", name: "email", id: "email" },
        { label: "Password", type: "password", name: "password", id: "password" }
    ];

    // Initialiser le state pour pouvoir récupérer les values des inputs
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    // Pour récupérer la valeur des inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    
    // Au submit du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()

        const resultAction = await dispatch(login(formData)) // Utilisation de l'action createAsyncThunk
        if (login.fulfilled.match(resultAction)) {
            navigate('/admin') // Redirection vers la page admin si la connexion réussit
        }

        // console.log(formData)

    }


    return <main className="main_signIn">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign in</h1>
            {login.rejected ? <p style={{textAlign: "center", color: "red", fontWeight: "bold"}}> {error} </p> : null}
            {acountCreateSuccessfully === true ? <p style={{textAlign: "center", color: "green", fontWeight: "bold"}}> Account created successfully </p> : null}
            <Form arrayGenerateInputForm={arrayGenerateInputForm} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            <p className="sign-up">No account? <Link to="/sign-up">Sign up</Link></p>
        </section>
    </main>
}

export default SignIn