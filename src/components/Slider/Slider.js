import React, { useState } from 'react';
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'
import '../../styles/HousingSheets.css'

function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyle = {
        backgroundImage: `url(${pictures[currentIndex]})`,
    }
    const leftArrowStyle = {
        position: 'absolute',
        left: '30px',
        top: '50%',
        transform: 'translate(0,-50%)',
        cursor: 'pointer'
    }
    const rightArrowStyle = {
        position: 'absolute',
        right: '30px',
        top: '50%',
        transform: 'translate(0,-50%)',
        cursor: 'pointer'
    }
    const goToPrevious = () => {

        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
        console.log('new index : ' + newIndex)
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        console.log('new index : ' + newIndex)
        setCurrentIndex(newIndex)
    }


    return pictures.length === 1 ?
        <div className='slider-style' style={sliderStyle}></div> :
        <div className='slider-style' style={sliderStyle}>
            <img className='slider-arrow' onClick={goToPrevious} style={leftArrowStyle} alt='left arrow' src={leftArrow} />
            <img className='slider-arrow' onClick={goToNext} style={rightArrowStyle} alt='right arrow' src={rightArrow} />
        </div >


}

export default Slider;