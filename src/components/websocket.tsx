import { useEffect, useState } from "react";
const websocketUrl: string = 'ws://192.168.7.254/ws';

// Realtime component
function Realtime() {
    interface fileType{
        temperature?: number;
        humidity?: number;
        pressure?: number;
        time?: string;
    }

    let [obj, setObj] = useState<fileType>({});

    useEffect(() => {
        const ws = new WebSocket(websocketUrl);

        try {
            ws.onopen = () => {
                console.log("WebSocket Opened");
            }
            ws.onmessage = (event) => {
                let file: fileType = JSON.parse(event.data);
                file.time = new Date().toISOString();
                setObj(file);
            }
        } catch (err){
            console.log("Error occurred:" + err);
        }

        return () => {
            ws.close();
        }
    }, []);

    return (
        <div className="col-12" id="realtime">
            <p>{Object.keys(obj).length === 0 ? "Aspettando aggiornamenti dalla socket..." : "Ecco i dati in realtime:"}</p>
            <p>Temperatura: {obj.temperature}°</p>
            <p>Umidità: {obj.humidity}%</p>
            <p>Pressione: {obj.pressure}hPA</p>
            <p>Data: {obj.time}</p>
        </div>
    )
}

// history component(need to create a tab that get update everytime the ws give new result)
// better start just by rendering a "static" ag grid with the history updated up to the call moment
// to implement w/o any problems both realtime and history while being updated I probably need a BackEnd like mongoDB
// I need to make the socket being listened everytime to update the history file, if I do not want to usa a database
function History() {
    return (
        <div className="col-12" id="history"></div>
    )
}

function callHistory() {
    console.log("call history");
}

export default function WebSocketSection() {
    const [isRealtime, setIsRealtime] = useState(false);


    return (
        <div className="col-12" style={{padding: "5px", backgroundColor: "darkslategrey"}}>
            <div className="row gy-2">
                <div className="col-12">
                    <h2 id="websocket-section">Dati WebSocket</h2>
                </div>
                {isRealtime && <Realtime/>}
                <div className="col-12">
                    <button type="button" className={isRealtime ? "btn btn-outline-danger" : "btn btn-outline-info"} id="realtime-btn"
                            onClick={() => setIsRealtime(!isRealtime)}>{isRealtime ? "Stop" : "Dati Realtime"}</button>
                    <button type="button" className="btn btn-outline-info" onClick={callHistory}>Controlla Storico</button>
                </div>
            </div>
        </div>
    )
}