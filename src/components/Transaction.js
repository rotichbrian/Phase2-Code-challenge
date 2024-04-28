import React from "react";

function Transaction({ transaction, delTransaction }) {
  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={() => delTransaction(transaction.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;



