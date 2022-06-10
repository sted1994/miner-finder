import React from 'react'

const DropDown = ({dataPoints}) => {

  const options = dataPoints.map(dataPoint => {
    return <option key={dataPoint} value={dataPoint} >{dataPoint}</option>
  })
  return (
    <>
    {options}
    </>
  )
}

export default DropDown
