import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const Init_url="https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

let COLD_URL="https://plus.unsplash.com/premium_photo-1675643444417-a8ed81a4a3d8?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
let RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




  return (
    <div className='InfoBox'>

        

        <div className='.cardContainer'>

        

    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
            ? RAIN_URL :info.temp>15
            ?HOT_URL:COLD_URL
        }
        title="green iguana"
      />
    
    <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {info.city} {" "}
    {info.humidity >80 ?(
        <ThunderstormIcon/>
    ):info.temp>15?(
        <SunnyIcon/>
    ):(
        <AcUnitIcon/>
    )}
  </Typography>
  <Typography variant="body2" component={"span"}>
    <p className="temp">{info.temp}&deg;C</p>
    <p>Feels like: {info.feelsLike}&deg;C</p>
    <p>Humidity: {info.humidity}%</p>
    <p>Min: {info.tempMin}&deg;C | Max: {info.tempMax}&deg;C</p>
    <p>Weather: <i>{info.weather}</i></p>
  </Typography>
</CardContent>




      <CardActions>
       
      </CardActions>
    </Card>
</div>
</div>
  );
}