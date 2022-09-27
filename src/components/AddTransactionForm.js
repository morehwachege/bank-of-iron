import React, { useEffect, useState } from "react";

function AddTransactionForm({fetchFunction}) {
  const [submitted, setSubmitted] = useState(null);
  // const [addedData, setAddedData] = useState(null);

  useEffect(() => {
    fetchFunction(submitted)

  }, [submitted])


  function handleSubmit(e) {
    e.preventDefault();
    const date = e.target.date.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;

    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount
    }
    // set submitted data
    setSubmitted(formData);
    e.target.reset();

  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>

    </div>
  );
}

export default AddTransactionForm;
