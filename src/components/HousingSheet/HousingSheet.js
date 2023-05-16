import React from "react"
import logements from '../../datas/logements.json'
import { useParams, useNavigate } from "react-router-dom"
import Slider from "../Slider/Slider"
import Rate from "../Rate/Rate"
import Tag from "../Tag/Tag"
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
        equipments: []
    })
    let listedEquipments = housing.equipments.map(item =>
        <p key={id + '-' + item} className="list-equipments">{item}</p>)

    useEffect(() => {
        const findId = logements.find(logement => logement.id === id)
        if (!findId) {
            let path = '/404'
            return navigate(path)
        } else {
            setHousing(findId)
        }
    }, [id, navigate])

    return <div className="body-container">
        <Slider pictures={housing.pictures} />
        <div className="housing-infos">
            <div className="housing-infos-first">
                <h1 className="housing-title">{housing.title}</h1>
                <p className='housing-location'>{housing.location} </p>
                <ul className="housing-tags">
                    {housing.tags.map(tag =>
                        <Tag key={`${id}-${tag}`} tag={tag} id={id} />
                    )}
                </ul>
            </div>

            <div className="housing-infos-second">
                <Host host={housing.host} />
                <Rate actualRating={housing.rating} id={id} />


            </div>
        </div>
        <div className="housing-accordions">
            <div className="housing-accordion-first">
                < Accordion title='Description' content={housing.description} />
            </div>
            <div className="housing-accordion-second">
                < Accordion title='Équipements' content={listedEquipments} />
            </div>
        </div>




    </div>
}

export default HousingSheet