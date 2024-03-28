import PropTypes from "prop-types"

const Banner = ({title, texte}) => {
    return (
        <div className="hero">
            <section>
                <h1>{title}</h1>
                <p>{texte}</p>
            </section>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    texte: PropTypes.string.isRequired,
}

export default Banner