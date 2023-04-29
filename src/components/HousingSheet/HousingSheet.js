import React from "react"
import logements from '../../datas/logements.json'
import { useParams } from "react-router-dom"
import Slider from "../Slider/Slider"
import Rate from "../Rate/Rate"
import Tags from "../Tags/Tags"
import Host from "../Host/Host"
import Accordion from "../Accordion/Accordion"

import '../../styles/HousingSheets.css'

function HousingSheet() {
    const { id } = useParams()
    const findId = logements.find(logement => logement.id === id)
    const isIdCorrect = (findId) ?
        console.log(findId) : console.log('error')
    console.log(isIdCorrect)

    return <div className="body-container">
        <Slider pictures={findId.pictures} />
        <div className="housing-infos">
            <div className="housing-infos-first">
                <h1 className="housing-title">{findId.title}</h1>
                <p className='housing-location'>{findId.location} </p>
                <Tags tags={findId.tags} />
            </div>

            <div className="housing-infos-second">
                <Host host={findId.host} />
                <Rate actualRating={findId.rating} />
            </div>
        </div>
        <div className="housing-accordions">
            <div className="housing-accordion-first">
                < Accordion title='Description'>
                    Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
                </Accordion>
            </div>
            <div className="housing-accordion-second">
                < Accordion title='Équipements'>
                    Climatisation
                    Wi-Fi
                    Cuisine
                    Espace de travail
                    Fer à repasser
                    Sèche-cheveux
                    Cintres
                </Accordion>
            </div>
        </div>




    </div>
}

export default HousingSheet