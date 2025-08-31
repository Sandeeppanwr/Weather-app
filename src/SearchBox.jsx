import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './SearchBox.css';
const SearchBox = ({updateInfo}) => {

    let[city,setCity]=useState("")
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="4d06ff0d5b356cfa6e28ecfaeb7b4ee2";
    

    let getWeatherInfo=async () =>{

        try{
 let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
       let result = {
    city: city,
    temp: (jsonResponse.main.temp - 273.15).toFixed(2),
    tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2),
    tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2),
    humidity: jsonResponse.main.humidity,
    feelsLike: (jsonResponse.main.feels_like - 273.15).toFixed(2),
    weather: jsonResponse.weather[0].description,
}
        console.log(result);
        return result;

        } catch(err){
            throw err;

        }
       
        
    }
    


    let handleChange=(e)=>{
        setCity(e.target.value);
    }

let handleSubmit= async (e)=>{

    try{
         e.preventDefault();
    console.log(city);
    setCity(" ");
  let newinfo= await  getWeatherInfo();
  updateInfo(newinfo);
    }
    catch(err) {
        setError(true);
    }

   
    
    
}

  return (
    <div className='searchBox'>
 
  


<form onSubmit={handleSubmit}>
    <TextField id='city' label="city name" variant='outlined' required value={city} onChange={handleChange}/>
    <br></br> <br></br>
    <Button variant='contained' type='submit'>Search</Button>

    {error && <p style={{color:"red"}}>Nope!!  such place exist</p>}
</form>
    </div>
  )
}

export default SearchBox
