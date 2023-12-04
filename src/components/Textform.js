import React, {useState} from 'react'
import copy from 'copy-to-clipboard';



export default function Textform(props) {
const handleUpClick =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase","success")
}
const handleCopyClick=() => {
  copy(text);
  props.showAlert("Text copied","success")
  
       }

const handleloClick =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase","success")
}
const handleExtraSpace=()=>{
  let newText=text.split("  ")
  setText(newText.join(" "))
}
const handleAllSpace=()=>{
  let newText=text.split(" ")
  setText(newText.join(""))
}
const handlectClick =()=>{
  setText("");
  props.showAlert("Text Removed","success")
}

const handleOnChange=(event)=>{
 setText(event.target.value);
}

    const [text,setText] =useState("");
    return (<>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label htmlFor="mybox" className="form-label">Enter Text</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#4477CE":"white", color:props.mode=== 'light'?'black': '#ffffff'}} id="mybox" rows="8" placeholder="Enter here" ></textarea>
    </div>
    
  <button className="btn btn-primary mx-1 my-1"onClick={handleloClick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-1 my-1"onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1"onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-1"onClick={handlectClick}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-1"onClick={handleExtraSpace}>Remove Extra Spaces</button>
  <button className="btn btn-primary mx-1 my-1"onClick={handleAllSpace}>Remove Spaces</button>
  
  </div>
  <div className="container my-3">
    <h1>Your Text summary</h1>
    <p>{text.split(" ").length} words , {text.length} characters and {text.split(".").length-1} sentences</p> 
    <p>Time required to read the text {0.008 * text.split("").length  } minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0? text: "Enter text above to preview here"}</p>
  </div>
  </>
  )
}
