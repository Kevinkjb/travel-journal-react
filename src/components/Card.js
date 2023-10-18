import React from 'react'

function Card(props){
  return(
    <div className='card--container'>
      <section>
        <div>
          <img className="location--img" src={props.item.imgUrl} alt="img"/>
        </div>
        <div className='travel--info'>
          <div className='location--section'>
            <span>{props.item.location} </span>
            <a className='map' href={props.item.googleMap} >View on Google Maps</a>
          </div>
          <h1 className='title'>{props.item.title}</h1>
          <div className='date'>
            <span>{props.item.startDate} -</span>
            <span> {props.item.endDate}</span>
          </div>
          <p className='description'>{props.item.description}</p>
        </div>
      </section>
    </div>
    
  )
}
export default Card