import React from "react";
import "../../styles/HousingCards.css"
import logement from '../../datas/logements.json'
import CardItem from "../CardItem/CardItem";

export default function HousingCards() {
    return (
        <div>
            <ul className="housing-cards-list">
                {logement.map(({ id, title, cover }) =>
                    <CardItem
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                )}
            </ul>
        </div>
    )
}