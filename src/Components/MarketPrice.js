import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/MarketPrice.css';

const MarketPrice = ({price}) => {
  return(
    <section className="information-container">
      <h3>Market Price</h3>
      <p className="market-price">${price}</p>
    </section>
  );
};

export default MarketPrice;

Dropdown.propTypes = {
  price: PropTypes.string
};
