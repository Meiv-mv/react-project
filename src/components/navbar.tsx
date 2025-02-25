export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menu</a>
                <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hobby</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Meteo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dati Websocket</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contattami</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

// <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="#">Menu</a>
//         <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                 aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#bio-section">Bio</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#hobby-section">Hobby</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#weather-section">Meteo</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#websocket-section">Dati Websocket</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#contact-section">Contattami</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>