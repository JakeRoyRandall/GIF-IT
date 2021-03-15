import React from 'react';

const Video = props => {
    return (
        <div>
            <video  controls className="video"
                    src={URL.createObjectURL(props.video)} 
                    onLoadedMetadata={e => props.passDuration(e.target.duration.toFixed(2))}
            />
        </div>
    )
}

export default Video