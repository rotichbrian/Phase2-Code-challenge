import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, handleAddTransaction, handleSearch, handleDelTransaction }) {
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm handleAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} handleDelTransaction={handleDelTransaction} />
    </div>
  );
}

export default AccountContainer;
