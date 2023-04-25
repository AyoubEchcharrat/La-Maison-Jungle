import React from "react";
import "../../styles/HousingCards.css"
import logement from '../../datas/logements.json'
import CardItem from "../CardItem/CardItem";

export default function HousingCards() {
    return (
        <div>
            {/* <div className="fake-card"></div> */}
            {console.log(logement)}
            <ul className="housing-cards-list">
                {logement.map(({ id, title, pictures }) =>
                    <CardItem key={id} title={title} pictures={pictures} />
                )}
            </ul>
        </div>
    )
}