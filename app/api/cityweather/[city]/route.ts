import { NextRequest, NextResponse } from "next/server";

export async function GET (req:NextRequest,context:any) {
    const { city } = context.params;
    
    var weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    var weatherJson = await weather.json();
    
    
    return NextResponse.json(weatherJson);
   
  }