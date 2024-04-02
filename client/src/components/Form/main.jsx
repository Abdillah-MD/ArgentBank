// import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./style.scss"
import PropTypes from "prop-types"

const Form = ({arrayGenerateInputForm, handleInputChange, handleSubmit}) => {
    const location = useLocation()

    return (
        <form action="/admin" onSubmit={handleSubmit}>
            {/* Parcours tout le tableau pour afficher les input du formulaire */}
            {arrayGenerateInputForm.map((data, index) => (
                <div className="input-wrapper" key={index}>
                    <label htmlFor={data.id}>{data.label}</label>
                    <input type={data.type} name={data.name} id={data.id} onChange={handleInputChange} required/>
                </div>
            ))}
            {/* Permet d'afficher l'input checkbox en fonction de l'url de la page */}
            {location.pathname === "/sign-in" 
                ? <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                : null
            }
            {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
            <button type="submit" className="sign-in-button">
                {location.pathname === "/sign-in" ? "Sign In" : "Sign Up" }
            </button>
        </form>
    )
}

Form.propTypes = {
    arrayGenerateInputForm: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
}

export default Form