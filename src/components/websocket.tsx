import { useEffect, useState } from "react";
const websocketUrl: string = 'ws://192.168.7.254/ws';
const ws = new WebSocket(websocketUrl);
let obj: object = {};

ws.onopen = () => {
    console.log("WebSocket opened");
}
ws.onmessage = (event) => {
    interface fileType{
        temperature: number;
        humidity: number;
        pressure: number;
        time: string;
    }

    let file: fileType = JSON.parse(event.data);
    let date = new Date().toString();
    file.time = date;
    obj = file
    console.log(obj);
}

function Realtime() {
    const [realtime, setRealtime] = useState<undefined>(undefined);
    const [runRealtime, setRunRealtime] = useState<boolean>(false);


    async function callRealtime(): Promise<void> {
        setRunRealtime(!runRealtime);
        console.log(runRealtime);
    }

    return (
        <div>
            <div>{realtime}</div>
            <div>
                <button onClick={callRealtime}>Controlla Realtime</button>
            </div>
        </div>
    )
}

export default function WebSocketSection() {
    return (
        <div>
            <Realtime />
        </div>
    )
}