import React from 'react';

function ProductRow(props) {
  const {name, price} = props
  return(
    <tr key={name}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
