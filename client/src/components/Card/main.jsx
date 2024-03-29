import PropTypes from "prop-types"

const Card = ({ icon, iconAlt, title, text }) => {
    return (
        <article className="feature_item">
            <img src={icon} alt={iconAlt} className="feature_item-icon"/>
            <h3 className="feature_item-title">{title}</h3>
            <p>{text}</p>
        </article>
    )
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Card