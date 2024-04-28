import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      const response = await fetch(' https://bank-flatiron-data.onrender.com/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const jsonResponse = await response.json();
      setTransactions(jsonResponse);
    } catch (error) {
      console.log(error);
      // Handle error, show message to user, etc.
    }
  };

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDelTransaction = (transactionID) => {
    const filterTrans = transactions.filter(
      (trans) => trans.id !== transactionID
    );
    setTransactions(filterTrans);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filterTrans = transactions.filter(
        (trans) => trans.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTransactions(filterTrans);
    } else {
      getTransactions();
    }
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        handleAddTransaction={handleAddTransaction}
        transactions={transactions}
        handleSearch={handleSearch}
        handleDelTransaction={handleDelTransaction}
      />
    </div>
  );
}

export default App;
