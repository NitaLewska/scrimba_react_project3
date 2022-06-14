import data from "../data.js"
import Card from "./Card"
import "./Reviews.css"

export default function Cards() {
    const cards = data.map(card => {
        return <Card 
            key = {card.id}
            title = {card.title}
            description = {card.description}
            price = {card.price}
            img = {card.coverImg}
            rating = {card.stats.rating}
            reviewCount = {card.stats.reviewCount}
            location = {card.location}
            openSpots= {card.openSpots}
        />
    })
    return (
        <section className="reviews">
            {cards}
        </section>
    )
}