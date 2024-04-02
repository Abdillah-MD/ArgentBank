import { Link } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice"
import axios from "axios";

const SignIn = () => {
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


    //////////////// Utiliser REDUX avec le store /////////////
    const dispatch = useDispatch()

    // Au submit du formulaire
    // const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

        // Requête HTTP avec axios pour récupérer le token 
        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/login", formData)
             
            console.log(response)
            console.log("=========")
            console.log(response.data.body.token)

            // Si la réponse serveur est 200 
            if (response.status === 200) {
                const token = response.data.body.token
                dispatch(login(token))
                // window.location.href = "/admin"
            }
        } catch (err) {
            console.error("Login error:", err)
        }
    }


    return <main className="main_signIn">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign in</h1>
            <Form arrayGenerateInputForm={arrayGenerateInputForm} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            <p className="sign-up">No account? <Link to="/sign-up">Sign up</Link></p>
        </section>
    </main>
}

export default SignIn