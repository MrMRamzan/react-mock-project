import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [searchData, setSearchData] = useState({searchKW:"", getStock:false})

  return(
    <div>
    <p>{`${searchData.searchKW} ${searchData.getStock}`}</p>
      <SearchBar dataHandler={setSearchData} />
      <ProductTable searchData= {searchData} />
    </div>
  );
}

export default FilterableProductTable;
