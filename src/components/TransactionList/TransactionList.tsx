import TransactionEl from "../TransactionEl/TransactionEl";
import css from "./TransactionList.module.css";

interface TransactionListProps {
  items: any;
}

export interface transactionProps {
  id?: string;
  type: string;
  amount: string;
  currency: string;
}

const TransactionList = ({ items }: TransactionListProps) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }: transactionProps) => (
          <TransactionEl
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
