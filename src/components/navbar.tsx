import {styled} from "@mui/material";

interface navbarProps {
    changeComponent: (boxNumber: number) => void,
    box: number
}

export default function Navbar({changeComponent, box}: navbarProps) {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={() => changeComponent(0)}>Menu</a>
                <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={box === 0 ? "nav-link active" : "nav-link"}  aria-current="page" onClick={() => changeComponent(0)}>Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className={box === 1 ? "nav-link active" : "nav-link"} onClick={() => changeComponent(1)}>Hobby</a>
                        </li>
                        <li className="nav-item">
                            <a className={box === 2 ? "nav-link active" : "nav-link"} onClick={() => changeComponent(2)}>Meteo</a>
                        </li>
                        <li className="nav-item">
                            <a className={box === 3 ? "nav-link active" : "nav-link"} onClick={() => changeComponent(3)}>Dati Websocket</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
