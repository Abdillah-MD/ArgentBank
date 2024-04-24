import { Link } from "react-router-dom"
import "./style.scss"
import imgErr404 from "/images/404_argBk.webp"

const Error404 = () => {
    return (
        <section className="err404">
            <h1>Ooops page not found !</h1>
            <Link to="/">Back to home page <i className="fa-solid fa-arrow-right"></i></Link>
            <img src={imgErr404} alt="Error 404" />
        </section>
    )
}

export default Error404