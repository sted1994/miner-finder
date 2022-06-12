import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({dataPoints}) => {
  const options = dataPoints.map(dataPoint => <option key={dataPoint} value={dataPoint} >{dataPoint}</option>);
  return (
    <>
    {options}
    </>
  );
};

export default DropDown;
DropDown.propTypes = {
  dataPoints: PropTypes.array
};
