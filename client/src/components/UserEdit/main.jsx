import PropTypes from "prop-types"
import "./style.scss"

const EditUserName = ({userNameData, firstNameData, lastNameData, handleCancel, handleSubmit, show, onChange}) => {
    return (
        <div className={`edit ${show === true ? "" : "hidden"}`}>
            <h2>Edit user info</h2>
            <form className="edit_form" onSubmit={handleSubmit} >
                <div className="edit_form-userName champ">
                    <label htmlFor="userName">User Name:</label>
                    <input name="userName" type="text" id="userName" placeholder={userNameData} onChange={onChange} />
                </div>
                <div className="edit_form-firstName champ">
                    <label htmlFor="firstName">First Name:</label>
                    <input name="firstName" type="text" id="firstName" placeholder={firstNameData} disabled />
                </div>
                <div className="edit_form-lastName champ">
                    <label htmlFor="lastName">Last Name:</label>
                    <input name="lastName" type="text" id="lastName" placeholder={lastNameData} disabled />
                </div>
                <div className="edit_form-button">
                    <button className="saveBtn" type="submit" onClick={(e) => {e.preventDefault() ;handleCancel(); handleSubmit()}}>Save</button>
                    <button className="cancelBtn" onClick={(e) => {e.preventDefault(); handleCancel()}}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

EditUserName.propTypes = {
    userNameData: PropTypes.string,
    firstNameData: PropTypes.string,
    lastNameData: PropTypes.string,
    handleCancel: PropTypes.func,
    handleSubmit: PropTypes.func,
    onChange: PropTypes.func,
    show: PropTypes.bool,
}

export default EditUserName