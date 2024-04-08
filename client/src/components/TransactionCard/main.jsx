import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./style.scss"

const TransactionCard = ({title, amount, balance}) => {
    return <section className="transaction">
        <div className="transaction_info">
            <h2 className="transaction_info-title">{title}</h2>
            <p className="transaction_info-amount"> {amount}</p>
            <p className="transaction_info-balance">{balance}</p>
        </div>
        <div className="transaction_link">
            <Link className="transaction_link-toDetails" to="#">View transactions</Link>
        </div>
    </section>
}

TransactionCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
}

export default TransactionCard