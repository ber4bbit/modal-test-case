import React, {useState} from 'react';
import {Button} from "@mui/material";

import ModalWindow from "./components/ModalWindow/ModalWindow";
import ModalWindowForm from "./components/ModalWindowForm/ModalWindowForm";

function App() {
    const [ modalActive, setModalActive ] = useState(false);
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Button variant="contained" onClick={() => setModalActive(true)}>Click here!</Button>
            <ModalWindow active={ modalActive } setActive={ setModalActive }>
                <ModalWindowForm/>
            </ModalWindow>
        </div>
    );
}

export default App;
