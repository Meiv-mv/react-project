import React, { useState, useEffect, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, TextField, Select, MenuItem } from '@mui/material';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface modalProps {
    handleClose: (passedHobby: object) => void;
    open: boolean;
    editingHobby?: {id?: string, hobby?: string, esperienza?: string};
}

function Modal({ open, handleClose, editingHobby }: modalProps) {
    const inputBar = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    function save() {
        if (inputBar.current?.value && selectRef.current?.value) {
            handleClose({id: editingHobby?.id, hobby: inputBar.current.value, esperienza: selectRef.current.value});
        } else {
            alert("Riempire correttamente i campi")
            return
        }
    }

    return (
        <React.Fragment>
            <Dialog open={open}>
               <DialogTitle>Edit Hobby</DialogTitle>
               <DialogContent>
                   <TextField type="text" name="hobby-name" id="hobby-name" label="Hobby" variant="standard"
                              margin="dense" defaultValue={editingHobby?.hobby} inputRef={inputBar} required/>
                   <Select label="Esperienza" defaultValue={editingHobby?.esperienza} inputRef={selectRef}>
                       <MenuItem value={"Neofita"}>Neofita</MenuItem>
                       <MenuItem value={"Bassa"}>Bassa</MenuItem>
                       <MenuItem value={"Base"}>Base</MenuItem>
                       <MenuItem value={"Buona"}>Buona</MenuItem>
                       <MenuItem value={"Ottima"}>Ottima</MenuItem>
                       <MenuItem value={"Eccellente"}>Eccellente</MenuItem>
                       <MenuItem value={"Esperto"}>Esperto</MenuItem>
                   </Select>
               </DialogContent>
               <DialogActions>
                   <Button variant="outlined" onClick={save}>Save</Button>
               </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

function Buttons({onEdit, onDelete}: { onEdit: () => void, onDelete: () => void }) {
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
    const colDefs = useMemo(() => [
        { field: "hobby", flex: 3, resizable: false, suppressMovable: true },
        { field: "esperienza", flex: 2, resizable: false, suppressMovable: true },
        {
            field: "",
            cellRenderer: (params: any) => (
                <Buttons
                    onEdit={() => handleEdit(params.node.data)}
                    onDelete={() => handleDelete(params.node.data.id)}
                />
            ),
            flex: 1,
            resizable: false,
            suppressMovable: true
        }
    ], []);
    const [visible, setVisible] = useState<boolean>(false);

    // localstorage
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('hobbyList') as string)){
            setRowData(JSON.parse(localStorage.getItem('hobbyList') as string))
        }
    }, []);

    useEffect(() => {
        updateLocalStorage()
    }, [rowData]);

    function updateLocalStorage() {
        localStorage.setItem('hobbyList', JSON.stringify(rowData));
    }


    // Add Hobby
    function addHobby() {
        if (inputRef.current?.value === "") {
            alert("Inserisci un hobby!")
            return
        }

        const id = uuidv4();
        let newHobby: string | undefined = inputRef.current?.value;
        const expLevels = ["Neofita", "Bassa", "Base", "Buona", "Ottima", "Eccellente", "Esperto"];
        const newHobbyExp: string = expLevels[Number(rangeRef.current?.value)]

        setRowData([...rowData, {id: id.slice(0, 8), hobby: newHobby, esperienza: newHobbyExp }]);

        if (inputRef.current?.value) {
            inputRef.current.value = ""
        }
        if (rangeRef.current?.value) {
            rangeRef.current.value = "0"
        }
    }

    // Edit Hobby
    interface objectProps {
        id?: string;
        hobby?: string,
        esperienza?: string,
    }

    const [editingHobby, setEditingHobby] = useState<objectProps>({});
    function handleEdit(params: any) {
        setEditingHobby({id: params.id, hobby: params.hobby, esperienza: params.esperienza});
        setVisible(true);
    }

    function handleClose(passedHobby: objectProps) {
        setRowData(prevData => prevData.map(row => row.id === editingHobby.id ? {...passedHobby} : row));
        setVisible(false);
    }

    // Delete Hobby
    function handleDelete(hobbyToDelete: string) {
        setRowData(prevData => prevData.filter(row => row.id !== hobbyToDelete));
    }

    return (
        <div style={{backgroundColor: "darkslategrey", color: "whitesmoke", height: "520px"}} className="col-12">
            <Modal handleClose={handleClose} open={visible} editingHobby={editingHobby}/>
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
                    <div id="myGrid" style={{height: "380px", width: "100%"}}>
                        <AgGridReact rowData={rowData} columnDefs={colDefs} />
                    </div>
                </div>
            </div>
        </div>
    )
}