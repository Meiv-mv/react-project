export default function Bio() {
    return (
        <div style={{backgroundColor: "darkslategrey", color: "whitesmoke", height: "100%"}} className="col-12" id="bio-section">
            <div className="row align-items-center">
                <div className="col-5">
                    <img className="img-fluid img-thumbnail rounded-circle"
                         style={{width: "150px", height: "150px", objectFit: "cover", objectPosition: "center"}}
                         src="/img/profile-pic.jpg"
                         alt="immagine personale"/>
                </div>
                <div className="col">
                    <h1>Marco Verrone, 23</h1>
                    <p>
                        Aspirante sviluppatore web.
                        Ho tante passioni come la musica, il gaming, guardare anime, leggere manga e l'informatica.
                        Attualmente sto studiando in particolare lo sviluppo front-end con tecnologie come Bootstrap,
                        Javascript e, a breve, React.
                    </p>
                </div>
            </div>
        </div>
    )
}