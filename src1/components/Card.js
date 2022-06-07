import React from 'react';
export default function Card(props){
let badgeText
if(props.item.instock===0)
{
    badgeText="Sold out";
}
 else if(props.item.country==="online"){
    badgeText="online";
}
    console.log(props)
    return(
        <>
        <div className='card-data'>

            {  badgeText && <div class="badge"> {badgeText}</div>}
        <img  className="image" src={props.item.img}/>
        <p><i className='bx bxs-star'></i>{props.item.rating} <span>({props.item.counting}) </span> <span> .{props.item.country} </span></p>
        <h4>{props.name}</h4>
        <p> <b>from {props.item.price} </b> / Person</p>
        </div>
        </>
    )
}