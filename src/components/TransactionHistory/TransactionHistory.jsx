import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css['transaction']}>
    <thead className={css['transaction-title']}>
      <tr>
        <th className={css['transaction-name']}>Type</th>
        <th className={css['transaction-name']}>Amount</th>
        <th className={css['transaction-name']}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css['transaction-top-value']} >
          <td className={css['transaction-value']}>{item.type}</td>
          <td className={css['transaction-value']}>{item.amount}</td>
          <td className={css['transaction-value']}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};