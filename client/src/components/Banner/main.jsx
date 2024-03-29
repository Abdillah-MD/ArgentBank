import PropTypes from "prop-types"
import "./style.scss"

const Banner = ({subtitles}) => {
    return (
        <div className="hero">
            <section className="hero_content">
                    <h2 className="sr-only">Promoted content</h2>
                    {subtitles.map((subtitle, index) => (
                        <p key={index} className="hero_content-subtitle">{subtitle}</p>
                    ))}
                    <p className="hero_content-text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

Banner.propTypes = {
    subtitles: PropTypes.array
}

export default Banner