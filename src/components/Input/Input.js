import React, {useState, useEffect} from 'react';
import './Input.css';

const Input = props => {
    const [drag, setDrag] = useState(false)
    const [video, setVideo] = useState(false)
    
    useEffect(() => {
        window.addEventListener('dragenter', handleDragIn)
        window.addEventListener('dragleave', handleDragOut)
        window.addEventListener('dragover', handleDrag)
        window.addEventListener('drop', handleDrop)
    }, [])

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
      
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true)
    }
        
    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.clientX === 0 && e.clientY === 0) setDrag(false)
    }
    
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDrag(false)
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) props.passVideo(e.dataTransfer.files[0])
    }

    return (
        <div className="Input">
            <div className="InputBox">
                <input type="file" onChange={e => props.passVideo(e.target.files[0])}/>
            </div>
        </div>
    )
}

export default Input