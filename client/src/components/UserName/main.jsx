import PropTypes from 'prop-types'


const UserName = ({name}) => {
    return (
        <>
            {name}
        </>
    )
}

UserName.propTypes = {
    name: PropTypes.string.isRequired,
}

export default UserName