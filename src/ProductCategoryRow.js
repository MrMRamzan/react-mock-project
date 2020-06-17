import React from 'react';

function ProductCategoryRow(props) {
  return(
    <tr>
      <td className="Category" colSpan = '2' >{props.name}</td>
    </tr>
  );
}

export default ProductCategoryRow;
