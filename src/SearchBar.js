import React,{useState} from 'react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const [isStocked, setStocked] = useState(false);

  const {dataHandler} = props

  const handleChange = event =>{
    dataHandler({searchKW: event.target.value, getStock: isStocked})
    setSearchText(event.target.value);
  }

  function handleCheckedValue(e){
    dataHandler({searchKW: searchText, getStock: !isStocked})
    setStocked(!isStocked);
  }

  return(
    <form>
      <input type="text" value={searchText} onChange={handleChange} /><br/>
      <input type="checkbox" value={isStocked} onChange={handleCheckedValue} />Only show products in stock
    </form>
  );
}

export default SearchBar;
