import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './App.css';
import Card from "./Cards.js";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);
  useEffect( () => {
    Axios
      .get("https://swapi.co/api/people/")
      .then( response => {
        setData(response.data.results)
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map( char => {
        return (
      <Card
        name = {char.name}
        height = {char.height}
        mass = {char.mass}
        hairColor = {char.hair_color}
        skinColor = {char.skin_color}
        eyeColor = {char.eye_color}
        birthYear = {char.birth_year}
        gender = {char.gender}
      /> 
        )
      })}
    </div>
  );
}

export default App;
