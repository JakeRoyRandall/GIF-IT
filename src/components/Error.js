import React from 'react';
import errorIcon from '../images/UploadError.png'
import '../styles/Error.css';

const Error = props => {

    return (
        <div className="Error">
            <img src={errorIcon} alt="Error Icon"/><br/>
            <span>Oh snap! There was an error.</span>
            <span>Please try again.</span>
            <button className="button" onClick={() => props.passError()}>Restart</button>
        </div>
    )
}

export default Error