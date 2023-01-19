import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleSpace = () => {
        console.log("Space was clicked")
        let newText='';
        for(let i=0;i<text.length;i++){
            if(text[i]!=' '){
                newText+=text[i];
            }
        }
        setText(newText)
    }

    const handleUpChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }

    const [text,setText] = useState('');

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleSpace}>Remove Space</button>
        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
