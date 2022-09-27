import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [accountData, setAccountData] = useState([]);
  // check state of current data
  const [accountUpdate, setAccountUpdate] = useState([...accountData])
  const [searchData, setSearchData] = useState([...accountData]);


 useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => {
        setAccountData(data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [accountUpdate])

  async function searchFunction(searchTerms){
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => {
        let newData = [];
        const filtered = data.filter(item => {
          return item.description.includes(searchTerms)
          
        })
        setAccountData(filtered)
        console.log(filtered)
      })
      .catch(error => {
        console.log(error)
      })

  }

  // handle addition of data 
  async function fetchAddData(submitted){
    fetch("http://localhost:8001/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        // data from the form
        body: JSON.stringify(submitted)
      })
      .then(res => res.json())
      .then(data => {
        let newData = [];
        newData.push(data)
        // update the dom with posted data
        setAccountUpdate(...newData)
        console.log(newData)
      })
      .catch(error => {
        console.log(error);
      })
  }



  return (
    <div>
      <Search searchFunction={searchFunction} />
      <AddTransactionForm fetchFunction={fetchAddData}/>
      <TransactionsList data={accountData} />
    </div>
  );
}

export default AccountContainer;
