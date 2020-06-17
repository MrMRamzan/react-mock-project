import React, {useState, useEffect} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import data from './InputData';

function ProductTable(props) {
  const {searchData} = props
  const [preparedData, setPreparedData] = useState({});

  const prepare_data = () => {
    const categories = {};

    data.map((item) => {
      if (categories[item.category]) {
        categories[item.category] = [...categories[item.category], item];
      } else {
        categories[item.category] = [item];
      }
    });
    setPreparedData(categories);
    };

    useEffect(() => {
      prepare_data();
    }, []);
  
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <>
          {Object.keys(preparedData).map((item) => {
            return(
              <>
                <ProductCategoryRow name={item} />
                {preparedData[item].map((product) => {
                  return(
                    <ProductRow name={product.name} price={product.price} />
                    )
                })}
              </>
              )
          })}
        </>
      </tbody>
    </table>
  );
}

export default ProductTable;
