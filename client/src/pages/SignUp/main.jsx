import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/slices/userSlice";

const SignUp = () => {
    const navigate = useNavigate()

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


    //////////////// Utiliser REDUX avec le store /////////////
    const dispatch = useDispatch()

    // Au submit du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

        // Requête HTTP avec axios pour récupérer le token 
        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/signup", formData)
            
            console.log(response)
            console.log("=========")
            console.log(response.data.body.token)

            // Si la réponse serveur est 200 
            if (response.status === 200) {
                const token = response.data.body.token
                dispatch(login(token))
                navigate(`/sign-in`)
            }
        } catch (err) {
            console.error("Login error:", err)
        }
    }

    return <main className="main_signUp">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign up</h1>
            <Form arrayGenerateInputForm={arrayGenerateInputForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
            <p className="sign-up">Already have an account?<br/><Link to="/sign-in">Sign in</Link></p>
        </section>
    </main>
}

export default SignUp