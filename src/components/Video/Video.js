import React from 'react';
import './Video.css';

const Video = props => {
    return (
        <div className="Video">
            <video  controls className="Video"
                    src={URL.createObjectURL(props.video)} 
                    onLoadedMetadata={e => props.passDuration(e.target.duration.toFixed(2))}
            />
        </div>
    )
}

export default Video