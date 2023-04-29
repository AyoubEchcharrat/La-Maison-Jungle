import React, { useState } from 'react';
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'

function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyle = {
        backgroundImage: `url(${pictures[currentIndex]})`,
        height: '400px',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative'
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
        <div style={sliderStyle}></div> :
        <div style={sliderStyle}>
            <img onClick={goToPrevious} style={leftArrowStyle} alt='left arrow' src={leftArrow} />
            <img onClick={goToNext} style={rightArrowStyle} alt='right arrow' src={rightArrow} />
        </div >


}

export default Slider;