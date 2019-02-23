import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

//const api_key="5981bf597e673bd589491e4b2075b72e";
 class App extends Component {
  getWeather = async(e) =>
  {
    e.preventDefault();
    //const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5981bf597e673bd589491e4b2075b72e');
    const data = await api_call.json();
    console.log(data);

  }
  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
};
export default App;