import React, { useState } from 'react';
import starFill from '../assets/starFill.svg'
import starEmpty from '../assets/starEmpty.svg'

function Rate({ actualRating }) {
    const rateCompare = [1, 2, 3, 4, 5]
    console.log(actualRating)
    return (
        <div className='rating-container'>
            {rateCompare.map(rate => rate <= actualRating ?
                < img src={starFill} alt={`${actualRating} stars on this Housing`} /> :
                < img src={starEmpty} alt={`${actualRating} stars on this Housing`} />)}
        </div>
    )
}

export default Rate;