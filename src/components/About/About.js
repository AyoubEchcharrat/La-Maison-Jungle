import '../../styles/index.css'
import '../../styles/About.css'
import '../../styles/Headline.css'
import Accordion from '../Accordion/Accordion'

export default function About() {


    return (
        <div className='body-container'>
            < div className='headline-container-about'>
                <div className="headline" ></div>
            </div >
            <Accordion title={'Fiabilité'}>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </Accordion>
            <Accordion title={'Respect'}>
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Accordion>
            <Accordion title={'Service'}>
                <p>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </Accordion>
            <Accordion title={'Sécurité'}>
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Accordion>
        </div>
    )
}


