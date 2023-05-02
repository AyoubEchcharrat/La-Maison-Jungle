import React from "react"
import logements from '../../datas/logements.json'
import { useParams, useNavigate } from "react-router-dom"
import Slider from "../Slider/Slider"
import Rate from "../Rate/Rate"
import Tags from "../Tags/Tags"
import Host from "../Host/Host"
import Accordion from "../Accordion/Accordion"
import '../../styles/HousingSheets.css'
import { useEffect, useState } from "react"




/* export const CheckHousingSheetId = () => {
    const { id } = useParams()
    const findId = logements.find(logement => logement.id === id)

    if (!findId) {
        throw Error("error : this page doesn't exist")
    }
    return findId
} */

function HousingSheet() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [housing, setHousing] = useState({
        tags: [],
        host: {},
        pictures: [],
        equipments: [],
    })

    useEffect(() => {
        const findId = logements.find(logement => logement.id === id)
        if (!findId) {
            let path = '/404'
            return navigate(path)
        } else {
            setHousing(findId)
        }
    }, [id, navigate])
    /*     const housing = CheckHousingSheetId() */

    return <div className="body-container">
        <Slider pictures={housing.pictures} />
        <div className="housing-infos">
            <div className="housing-infos-first">
                <h1 className="housing-title">{housing.title}</h1>
                <p className='housing-location'>{housing.location} </p>
                <Tags tags={housing.tags} id={id} />
            </div>

            <div className="housing-infos-second">
                <Host host={housing.host} />
                <Rate actualRating={housing.rating} id={id} />


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
                    Climatisation  <br />
                    Wi-Fi <br />
                    Cuisine <br />
                    Espace de travail <br />
                    Fer à repasser <br />
                    Sèche-cheveux <br />
                    Cintres
                </Accordion>
            </div>
        </div>




    </div>
}

export default HousingSheet