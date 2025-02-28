import { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function Buttons({onEdit, onDelete}: {onEdit: () => void, onDelete: () => void}) {
    return (
        <div className="grid-btn-container">
            <button className="btn btn-success rounded-circle" onClick={onEdit}>
                <img src="/img/edit-icon.svg" alt="Icona dell'editing hobby"/>
            </button>
            <button className="btn btn-danger rounded-circle" onClick={onDelete}>X</button>
        </div>
    )
}

export default function HobbySection() {
    const inputRef = useRef<HTMLInputElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const [rowData, setRowData] = useState<Array<any>>([]);
    const [colDefs, setColDefs] = useState<Array<any>>([
        {field: "hobby", flex: 3, resizable: false, suppressMovable: true},
        {field: "esperienza", flex: 2, resizable: false, suppressMovable: true},
        {
            field: "",
            cellRenderer: (params: any) => {
                return (
                    <Buttons onEdit={() => handleEdit()} onDelete={() => handleDelete(params.node.data.hobby)} />
                )
            },
            flex: 1,
            resizable: false,
            suppressMovable: true
        }
    ]);

    function addHobby() {
        if (inputRef.current?.value === "") {
            alert("Inserisci un hobby!")
            return
        }

        // let newId: number = Date.now()
        let newHobby: string | undefined = inputRef.current?.value;
        const expLevels = ["Neofita", "Bassa", "Base", "Buona", "Ottima", "Eccellente", "Esperto"];
        const newHobbyExp: string = expLevels[Number(rangeRef.current?.value)]

        setRowData([...rowData, {hobby: newHobby, esperienza: newHobbyExp }]);

        if (inputRef.current?.value) {
            inputRef.current.value = ""
        }
        if (rangeRef.current?.value) {
            rangeRef.current.value = "0"
        }
    }

    function handleEdit() {
        console.log("Editing hobby");
    }

    function handleDelete(hobbyToDelete: string) {
        setRowData(prevData => {
            const updatedData = prevData.filter(item => item.hobby !== hobbyToDelete);
            return updatedData;
        });
    }


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
                                    <input type="text" className="form-control" name="hobbies-bar" id="hobbies-bar" ref={inputRef} />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-2" style={{padding: "0"}}>
                                            Neofita
                                        </div>
                                        <div className="col-8" style={{padding: "0"}}>
                                            <input type="range" className="form-range" name="hobbies-exp-bar"
                                                   id="hobbies-exp-bar" min="0" max="6" ref={rangeRef} />
                                        </div>
                                        <div className="col-2" style={{padding: "0"}}>
                                            Esperto
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <button type="button" className="btn btn-outline-info rounded-circle" id="hobbies-btn" onClick={addHobby}>+
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{marginBottom: "5px"}}>
                    <div id="myGrid" style={{height: "300px", width: "100%"}}>
                        <AgGridReact rowData={rowData} columnDefs={colDefs} />
                    </div>
                </div>
            </div>
        </div>
    )
}