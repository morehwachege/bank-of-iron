import React , { useEffect , useState} from "react";

function Search({searchFunction}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchFunction(search)
  }, [search])

  // update state on input change 
  function handleSearch(e){
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
