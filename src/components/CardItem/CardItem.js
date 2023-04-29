import React from "react"
import "../../styles/CardItem.css"
import { useNavigate } from "react-router-dom";

export default function CardItem({ id, title, cover }) {

    let navigate = useNavigate()

    const routeChange = () => {
        let path = `/housingsheet/${id}`
        navigate(path)
    }

    return (
        <div onClick={routeChange} className="card-item">
            <div className="card-item-gradient">
                <img className="card-item-image" src={cover} alt={`logement "${title}"`} />
            </div>
            <p className="card-item-title">{title}</p>
        </div>
    )


}


