import React from "react";

export default function Cards(props){
     return(
      <div className = "cards">
        <img className="card--photo" src={`../images/${props.item.img}`} alt="location"></img>
        <div className="card--stats">
        <div className="card--headers">
            <img src="../images/location.png" alt="icon" className="location--logo"></img>
            <p>{props.item.title}</p>
            <a href={props.item.mapslink}>See on Maps</a>
        </div>
        <p className="card--title">{props.item.title}</p>
        <div className="card--dates">
            <span>{props.item.startdate}</span>
            <span>{props.item.enddate}</span>
        </div>
        <p className="card--desc">{props.item.desc}</p>
        </div>
      </div>
     )
}
