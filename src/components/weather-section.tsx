import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, {LatLngExpression} from 'leaflet'
import { Box, CircularProgress} from "@mui/material";
const apiKey = "e22084dc16b09ad59917b9a99d7e29e6"

interface weatherBoxProps {
    city?: string;
    temperature?: number;
    humidity?: number;
    windSpeed?: number;
    description?: string;
}

function WeatherBox({city, temperature, humidity, windSpeed, description}: weatherBoxProps) {
    return (
        <div className="col-12">
            <p>Città: {city}</p>
            <p>Temperatura: {temperature}°C</p>
            <p>Umidità: {humidity}%</p>
            <p>Vento: {windSpeed}m/s</p>
            <p>Meteo: {description}</p>
        </div>
    )
}

function CircularIndeterminate() {
    return (
        <div className="col-12">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="inherit" />
            </Box>
        </div>
    );
}

function ErrorBox() {
    return (
        <div className="col-12">
            <p>Errore! Controlla di aver inserito correttamente il nome della città.</p>
        </div>
    )
}

export default function WeatherSection() {
    const [box, setBox] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const [center, setCenter] = useState<LatLngExpression>([40.8333, 14.25])
    const customIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [20, 34]
    })

    interface weatherType{
        city?: string,
        temperature?: number,
        humidity?: number,
        windSpeed?: number,
        description?: string,
    }
    const [weather, setWeather] = useState<weatherType>({})

    async function searchWeather(){
        if(inputRef.current?.value === ""){
            alert("Inserire il nome di una città!")
            return
        }

        setBox(2)

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current?.value}&appid=${apiKey}&units=metric&lang=it`)
            const json = await response.json()

            if(!response.ok){
                throw new Error(response.statusText);
            } else {
                setWeather({
                    city: json.name,
                    temperature: parseInt(json.main.temp),
                    humidity: json.main.humidity,
                    windSpeed: json.wind.speed,
                    description: json.weather[0].description,
                })
                setTimeout(() => {
                    setBox(1)
                    setCenter([json.coord.lat, json.coord.lon])
                }, 400)
            }
        } catch (err) {
            setTimeout(() => {
                setBox(3)
            }, 400)
        }

        if (inputRef.current) {
            inputRef.current.value = "";
        }

    }

    function UpdateMap({coords}: { coords: LatLngExpression }) {
        const map = useMap()

        useEffect(() => {
            map.setView(coords, map.getZoom());
        }, [coords, map]);

        return null
    }

    return (
        <div className="col-12" style={{padding: "5px", backgroundColor: "darkslategrey", color: "whitesmoke",minHeight: "520px"}}>
            <div className="row gy-2">
                <div className="col-12">
                    <h2 id="weather-section">Meteo</h2>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <input type="text" name="weather-search-bar" className="form-control" ref={inputRef} />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-info" id="search-weather-btn"
                                    onClick={searchWeather}>Cerca
                            </button>
                        </div>
                    </div>
                </div>
                {box === 1 && <WeatherBox city={weather.city} temperature={weather.temperature} humidity={weather.humidity} windSpeed={weather.windSpeed} description={weather.description} />}
                {box === 2 && <CircularIndeterminate />}
                {box === 3 && <ErrorBox />}
                <div className="col-12" style={{height: "350px", width: "100%"}}>
                    <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={center} icon={customIcon}>
                            <Popup>{!weather.city ? "Napoli" : weather.city}</Popup>
                        </Marker>
                        <UpdateMap coords={center}/>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}