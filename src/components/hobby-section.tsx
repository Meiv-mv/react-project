function Tab() {


    return (
        <div id="myGrid" style={{height: "300px", width: "100%"}}></div>
    )
}

export default function HobbySection() {
    return (
        <div style={{backgroundColor: "darkslategrey", color: "whitesmoke"}} className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2 id="hobby-section">Hobby</h2>
                </div>
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-10">
                            <div className="row gy-2">
                                <div className="col-12">
                                    <input type="text" className="form-control" name="hobbies-bar" id="hobbies-bar"/>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-2" style={{padding: "0"}}>
                                            Neofita
                                        </div>
                                        <div className="col-8" style={{padding: "0"}}>
                                            <input type="range" className="form-range" name="hobbies-exp-bar"
                                                   id="hobbies-exp-bar" min="0" max="6"/>
                                        </div>
                                        <div className="col-2" style={{padding: "0"}}>
                                            Esperto
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <button type="button" className="btn btn-outline-info rounded-circle" id="hobbies-btn">+
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{marginBottom: "5px"}}>
                    <Tab />
                </div>
            </div>
        </div>
    )
}