import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, handleDelTransaction }) {
  // Deleting a transaction
  const delTransaction = async function (transactionID) {
    try {
      await fetch(`/transactions/${transactionID}`, { method: 'DELETE' });
      handleDelTransaction(transactionID);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
        </tr>
        {/* Render a list of <Transaction> components here */}
        {transactions.map((transaction, idx) => (
          <Transaction
            key={`${transaction.id}-${idx}`} // Ensure this key is unique for each transaction
            transaction={transaction}
            delTransaction={() => delTransaction(transaction.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
