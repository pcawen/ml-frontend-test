import React from 'react';

const currencies = {
  ARS: '$ ',
  UYU: '$ ',
  USS: 'US$ '
}

const Price = ({ currency, amount, decimals, className }) => {
  return (
    <div className={className}>
      {currencies[currency]}
      <span>{amount} <sup>{decimals}</sup> </span>
    </div>
  )
}

export default Price;