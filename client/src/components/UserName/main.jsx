import PropTypes from 'prop-types'


const UserName = ({name}) => {
    return (
        <span>
            {name}
        </span>
    )
}

UserName.propTypes = {
    name: PropTypes.string.isRequired,
}

export default UserName