import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect, useState,useContext } from 'react';
import { UserContext } from './userContext';

function App() {
  const a=useContext(UserContext);
  console.log(a);
  const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const[data,setData]=useState([]);
  const [text,setText]=useState("");
  const fetchurl=async(url)=>{
    let response=await fetch(url);
    let a=await response.json();
    setData(a.drinks);
  }
  useEffect(()=>{
    const currurl=`${url}${text}`
    fetchurl(currurl)
  },[data])
  return (
    <div className='main'>
      <div className='cart'><p>Cart</p><img src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png"/></div>
      <center><input value={text} onChange={(e)=>{setText(e.target.value)}} type='text' placeholder='   search item'/></center>
        <div className="App">
          {data.map((eachitem)=>{
            var {strDrink,strDrinkThumb,strInstructions}=eachitem;
            if(strInstructions.length>150){
              strInstructions=strInstructions.slice(0,150)
          }
          return(
            <div>
              <Card
              name={strDrink}
              src={strDrinkThumb}
              content={strInstructions}
              />
            </div>
          )
          })}
      </div>
    </div>
  );
}

export default App;
