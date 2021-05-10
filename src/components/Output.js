import React from 'react';
import { saveAs } from 'file-saver';
import '../styles/Output.css';

const Output = props => {
    return (
        <div className="Output">
            <div className="gifContainer">
                <img className="gif" src={props.gif} alt="completed gif"/>
            </div>
            <button className="button" onClick={() => props.removeGif()}>GO BACK</button>
            <button className="button" onClick={() => saveAs(props.gif, props.fname)}>DOWNLOAD</button>
        </div>
    )
}

export default Output