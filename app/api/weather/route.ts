import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    var weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.56&lon=-97.78&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    var weatherJson = await weather.json();
    
    
    return NextResponse.json(weatherJson);
}