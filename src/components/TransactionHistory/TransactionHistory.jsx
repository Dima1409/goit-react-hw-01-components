import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead>
      <tr className={css.transactionRowHead}>
        <th className={css.transactionTh}>Type</th>
        <th className={css.transactionTh}>Amount</th>
        <th className={css.transactionTh}>Currency</th>
      </tr>
    </thead>
    <tbody>
    {items.map(({id, type, amount, currency}) => (
        <tr className={css.transactionBodyRow} key={id}>
          <td className={css.transactionBodyTd}>{type}</td>
          <td className={css.transactionBodyTd}>{amount}</td>
          <td className={css.transactionBodyTd}>{currency}</td>
        </tr>
    ))}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
}
