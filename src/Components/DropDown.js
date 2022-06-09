import React from 'react'

const DropDown = ({dataPoints}) => {

  const options = dataPoints.map(dataPoint => {
    return <option value={dataPoint} >{dataPoint}</option>
  })
  return (
    <>
    {options}
    </>
  )
}

export default DropDown
