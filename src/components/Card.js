function Card({card, myId, onCardClick}) {
    let like;
    card["likes"].map(user => {
        if (user["_id"] === myId) like = "card__like_active";
    })

    return (
        <article className="card">
            <img src={card["link"]} alt={card["name"]} className="card__image" onClick={() => {
                onCardClick(card)
            }}/>
            {
                myId === card["owner"]["_id"] && <button className="card__trash" type="button"/>
            }
            <h2 className="card__title">{card["name"]}</h2>
            <button className={`card__like ${card["likes"].length && "card__like_with-number"} 
            ${like}`} type="button"/>
            <span className="card__like-number">
                {card["likes"].length !== 0 ? card["likes"].length : ""}
            </span>
        </article>
    );
}

export default Card;
