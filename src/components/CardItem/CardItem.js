import React from "react"
import "../../styles/CardItem.css"

export default function CardItem({ id, title, pictures }) {
    return (
        <div className="card-item">
            <div className="card-item-gradient">
                <img className="card-item-image" src={pictures[0]} alt={`logement "${title}"`} />
            </div>
            <p className="card-item-title">{title}</p>
        </div>
    )


}


