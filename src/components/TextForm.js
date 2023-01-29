import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase', 'success')
    }

    const handleSpace = () => {
        console.log("Space was clicked")
        let newText='';
        newText = text.split(' ').join('')
        setText(newText)
        props.showAlert('Removed Spaces', 'success')
    }

    const handleUpChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    
    const textLength = (value) => {
        return value!==''
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'#042743':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.color} my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.color} my-2`} onClick={handleSpace}>Remove Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter(textLength).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter(textLength).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Text to Preview'}</p>
        </div>
        </>
    )
}
