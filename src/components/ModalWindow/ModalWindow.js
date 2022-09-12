import React from 'react';
import {Button} from "@mui/material";

import './ModalWindow.css';

export default function ModalWindow({ active, setActive, children }) {
    return (
        <div className={active ? 'modalContainer active' : 'modalContainer'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContainer__content active' : 'modalContainer__content'} onClick={event => event.stopPropagation()}>
                <Button variant="text" className="modalContainer__content-closeBtn" onClick={() => setActive(false)}>&times;</Button>
                <p className="modalContainer__content-header">Title form</p>
                {children}
            </div>
        </div>
    );
}