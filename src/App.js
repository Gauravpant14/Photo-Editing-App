import React, { useState } from 'react'
import { DEFAULT_OPTIONS } from './ConstantOption'
import SidebarItem from './SidebarItem'
import Slider from './Slider'

function App() {

  const [option, setOption] = useState(DEFAULT_OPTIONS)
  const [selectedOptIndex, setSelectedOptIndex] = useState(0)
  const selectedOption = option[selectedOptIndex]

  const handleSliderChange = ({ target }) => {
    setOption(pre => {
      return pre.map((opt, index) => {
        if (index !== selectedOptIndex) return opt
        return { ...opt, value: target.value }
      })
    })
  }

  const getImageStyle = () => {
    const filters = option.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return {filter: filters.join(' ') };
  }

  console.log(getImageStyle());
  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()} />
      <div className="sidebar">
        {option.map((option, index) => {
          // eslint-disable-next-line no-unused-expressions
          return (
            <SidebarItem
              key={index}
              name={option?.name}
              active={index === selectedOptIndex}
              handleClick={() => setSelectedOptIndex(index)}
            />)
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />

    </div>
  )
}

export default App
