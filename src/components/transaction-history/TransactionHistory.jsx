import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr className={css.tableLine}>
      <th className={css.tableValue}>Type</th>
      <th className={css.tableValue}>Amount</th>
      <th className={css.tableValue}>Currency</th>
    </tr>
  </thead>

    <tbody>
    {items.map(item => (
      <tr
        key={item.id}
        className={css.tableLine}>
      <td className={css.transactionData}>{item.type}</td>
      <td className={css.transactionData}>{item.amount}</td>
      <td className={css.transactionData}>{item.currency}</td>
    </tr>    
    ))}
  </tbody>
</table>
    )
}