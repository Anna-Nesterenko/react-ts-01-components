import { transactionProps } from "../TransactionList/TransactionList";

const TransactionEl = ({ type, amount, currency }: transactionProps) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionEl;
