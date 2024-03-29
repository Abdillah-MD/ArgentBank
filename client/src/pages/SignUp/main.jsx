import { Link } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"

const SignUp = () => {
    const formData = [
        { label: "First Name", type: "text", id: "firstName" },
        { label: "Last Name", type: "text", id: "lastName" },
        { label: "Username", type: "text", id: "username" },
        { label: "Email", type: "email", id: "email" },
        { label: "Password", type: "password", id: "password" }
    ];

    return <main className="main_signUp">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign up</h1>
            <Form formData={formData}/>
            <p className="sign-up">Already have an account?<br/><Link to="/sign-in">Sign in</Link></p>
        </section>
    </main>
}

export default SignUp