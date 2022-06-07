import React from 'react';
export default function Places(props)
{
    return(
        <>
            
                   <div className='place-detail'>
                        <div className='img'>
                            <img  className="image" src={props.data.img}/>
                        </div>   
                        <div className='info'>
                        <i class='bx bxs-map' ></i> {props.data.loc} <a href={props.data.link}> <span>view on google map</span></a>
                        <h2>{props.data.name}</h2>
                        <h5> {props.data.sdate} - {props.data.edate}</h5>
                        <p> {props.data.info}</p>
                        </div>
                   </div>
           



        </>
    )
}