import React from "react"

export default function Card(props){
    console.log(props);
    let badgetext="";
    if(props.item.openspots === 0){
        badgetext = "SOLD OUT"
    }
    else if(props.item.location ==="online"){
        badgetext = "ONLINE"
    }
    return(
    <div className="card">
    {badgetext && <div className="card--badge">{badgetext}</div>}
    <img src={`../images/${props.item.coverImg}`} alt="coverimg" className="card--image"/>
    <div className="card-stats">
        <img src="../images/star.png" alt="star" className="card--star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.veiewcount})</span>
        <span className="grey">{props.item.location}</span>
    </div>
    <p className="card--title">{props.item.title}</p>
    <p className="card--price"><span className="bold">${props.item.price}</span>/person</p>
</div>
)
}
