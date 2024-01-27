import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upparcase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState("enter the text here");
    //text = "new text" // wrong way to change the state
    //setText = {"new text"} // correct way to change the state
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        {/*<label for="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
    </div>
    </>
  )
}
