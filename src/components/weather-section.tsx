function searchWeather(){
    console.log("clicked")
}

export default function WeatherSection() {
    return (
        <div className="col-12" style={{padding: "5px", backgroundColor: "darkslategrey"}}>
            <div className="row gy-2">
                <div className="col-12">
                    <h2 id="weather-section">Meteo</h2>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <input type="text" name="weather-search-bar" className="form-control" id="weather-bar"/>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-info" id="search-weather-btn"
                                    onClick={searchWeather}>Cerca
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12" id="weather-information">
                    <p id="city-name">Città: -</p>
                    <p id="temperature">Temperatura: -</p>
                    <p id="humidity">Umidità: -</p>
                    <p id="wind-speed">Vento: -</p>
                    <p id="weather-description">Meteo: -</p>
                </div>
                <div className="col-12" id="loading-box">
                    <p>Sto caricando le informazioni sul meteo...</p>
                </div>
                <div className="col-12" id="error-box">
                    <p>Errore! Controlla di aver inserito correttamente il nome della città.</p>
                </div>
                <div className="col-12">
                    <div id="map" style={{height: "250px", width: "100%"}}></div>
                </div>
            </div>
        </div>
    )
}