import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Upper Case was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearclick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Clipboard Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
          <h1> {props.heading}</h1>
          <textarea
            className="form-control" 
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter something in th Textbox above to preview it here"}</p>
      </div>
    </>
  );
}
