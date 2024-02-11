import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUndoClick = () =>{
    //console.log("Undo was clicked" + text);
    let newText = text;
    setText(newText);
}
  const handleRedoClick = () =>{
    //console.log("Redo was clicked" + text);
    let newText = text;
    setText(newText);
  }
    const handleUpClick = () =>{
        //console.log("Upparcase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
      //console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleCopyClick = () =>{
      debugger;
      //console.log("Copy Text was clicked" + text);
      let copyText = document.getElementById('myBox');
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
  }

  const handleClearTextClick = () =>{
    //console.log("Clear Text was clicked" + text);
    let newText = '';
    setText(newText);
  }

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '));
  }

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState("");
    //text = "new text" // wrong way to change the state
    //setText = {"new text"} // correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
          {/*<label for="myBox" className="form-label">Example textarea</label>*/}
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} placeholder="Enter Text Here ..." rows="8"></textarea>
          <p></p>
          <button className="btn btn-secondary mx-1" onClick={handleUndoClick}>Undo </button>
          <button className="btn btn-secondary mx-1" onClick={handleRedoClick}>Redo </button>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase </button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text </button>
          <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces </button>

      </div>
    </div>
    <div className='container my-3'>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.08 * text.split(" ").length} minute to read </p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
    </>
  )
}
