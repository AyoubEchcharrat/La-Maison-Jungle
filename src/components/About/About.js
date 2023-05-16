import '../../styles/index.css'
import '../../styles/About.css'
import '../../styles/Headline.css'
import Accordion from '../Accordion/Accordion'

export default function About() {

    const aboutDataContent = [
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        , 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        , "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        , "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    ]

    return (
        <div className='body-container'>
            < div className='headline-container-about'>
                <div className="headline" ></div>
            </div >
            <Accordion title={'Fiabilité'} content={aboutDataContent[0]} />

            <Accordion title={'Respect'} content={aboutDataContent[1]} />

            <Accordion title={'Service'} content={aboutDataContent[2]} />

            <Accordion title={'Sécurité'} content={aboutDataContent[3]} />

        </div>
    )
}


