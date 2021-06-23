import React from 'react'

const Slider = ({min,max,value,handleChange}) => {
    return (
        <div className="slider-container">
            <input 
            type="range"
            className="slider" 
            min={min}
            max={max}
            onChange={handleChange}
            />

        </div>
    )
}

export default Slider
