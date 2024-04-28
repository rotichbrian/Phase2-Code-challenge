import React, { useState } from "react";

function AddTransactionForm({ handleAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!formData.date || !formData.description || !formData.category || !formData.amount) {
      setError("All fields are required.");
      return;
    }

    // Call handleAddTransaction with the form data
    handleAddTransaction(formData);

    // Reset form data and error state
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        {error && <div className="ui negative message">{error}</div>}
        <div className="inline fields">
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
