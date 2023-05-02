import starFill from '../assets/starFill.svg'
import starEmpty from '../assets/starEmpty.svg'

function Rate({ actualRating }, id) {
    const rateCompare = [1, 2, 3, 4, 5]
    return (
        <div className='rating-container'>
            {rateCompare.map(rate => rate <= actualRating ?
                < img key={`${id}-${rate}`} src={starFill} alt={`${actualRating} stars on this Housing`} /> :
                < img key={`${id}-${rate}`} src={starEmpty} alt={`${actualRating} stars on this Housing`} />)}
        </div>
    )
}

export default Rate;