import React from "react";
import "./Card.css"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <article className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`${props.img}`} alt=''></img>
                <img src="star.png" className="card--star" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </article>
    )
}