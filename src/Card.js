import React from 'react'
import "./Card.css"
import { useState } from 'react';
function Card(props) {
  const [list,setList]=useState([]);
  const additem=()=>{
    let obj={
      name:props.name,
      content:props.content,
      src:props.src
    }
    setList([...list,obj]);
  }
  return (
    <div className='card'>
      <img src={props.src}/>
      <div className='details'>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        <button onClick={()=>{additem();
        console.log({list})}}>add</button>
      </div>
    </div>
  )
}

export default Card
