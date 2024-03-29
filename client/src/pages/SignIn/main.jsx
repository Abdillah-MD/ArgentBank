import { Link } from "react-router-dom"
import Form from "../../components/Form/main"
import "./style.scss"

const SignIn = () => {
    const formData = [
        { label: "Username", type: "text", id: "username" },
        { label: "Password", type: "password", id: "password" }
    ];

    return <main className="main_signIn">
        <section className="sign-in">
            <i className="fa-solid fa-circle-user sign-in-icon"></i>
            <h1 className="sign-in-title">Sign in</h1>
            <Form formData={formData}/>
            <p className="sign-up">No account? <Link to="/sign-up">Sign up</Link></p>
        </section>
    </main>
}

export default SignIn