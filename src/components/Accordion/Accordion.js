import { useState } from 'react'
import '../../styles/Accordion.css'
import crochet from '../assets/crochet.svg'

export default function Accordion({ children, title }) {
    const [accordion, collapseAccordion] = useState(false)

    return accordion ?
        <div className='accordion-container'>
            <div className='accordion-title' onClick={() => collapseAccordion(false)}>
                {title}
                <img className='crochet-turned crochet' alt='crochet pour fermer' src={crochet} />
            </div>
            <div className='accordion-text-opened' >
                {children}

            </div>
        </div>
        :
        <div className='accordion-container' onClick={() => collapseAccordion(true)} >
            <div className='accordion-title'>
                {title}
                <img className='crochet' alt='crochet pour ouvrir' src={crochet} />
            </div>
        </div>

}