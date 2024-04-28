import React from "react";

function Search({ handleSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    console.log("Searching for:", searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
