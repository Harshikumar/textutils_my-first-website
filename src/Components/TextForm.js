import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toLocaleUpperCase());
    if(text==="")
    {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    }
    else{
    props.showAlert("Converted to Uppercase","success");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const handleLowClick = () => {
    setText(text.toLocaleLowerCase());
    if(text==="")
    {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    }
    else{
    props.showAlert("Converted to Lowercase","success");
    }
  };
  const handleClearClick = () => {
    setText("");
    
    props.showAlert("Textbox Cleared","success");
  };
  const handleCapitalClick = () => {
    if (text === "") {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    } else {
      props.showAlert("Starting Characters of all word are capitalized","success");
      let newText = text.split(" ");
      let upText = "";
      let finalText = "";
      for (let index = 0; index < newText.length; index++) {
        let lowText = "";
        if(newText[index]===""){continue;
        }
        else{
        upText = newText[index][0].toUpperCase();
        for (let n = 1; n < newText[index].length; n++) {
          lowText = lowText + newText[index][n].toLowerCase();
        }
        if (index < newText.length - 1) {
          finalText = finalText + upText + lowText + " ";
        } else {
          finalText = finalText + upText + lowText;
        }
      }
      setText(finalText);
    }
    }
  };
  const handleInvertClick = () => {
    if (text === "") {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    } else {
      let newText = text.split(" ");
      let finalText = "";
      for (let index = 0; index < newText.length; index++) {
        let invertText = "";
        for (let n = 0; n < newText[index].length; n++) {
          if (
            newText[index].charCodeAt(n) > 64 &&
            newText[index].charCodeAt(n) < 91
          ) {
            invertText = invertText + newText[index][n].toLowerCase();
          } else if (
            newText[index].charCodeAt(n) > 96 &&
            newText[index].charCodeAt(n) < 123
          ) {
            invertText = invertText + newText[index][n].toUpperCase();
          }
        }
        if (index < newText.length - 1) {
          finalText = finalText + invertText + " ";
        } else {
          finalText = finalText + invertText;
        }
      }
      setText(finalText);
      props.showAlert("Text Inverted","success");
      
    }
  };
  const handleRepalceText=(event)=>{
    setRepText(event.target.value);
  }
  const handleReplaceBy=(event)=>{
    setRepByText(event.target.value);
  }
  const handleReplaceClick=()=>{
    setText(text.replaceAll(repText,repByText));
    if(text==="")
    {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    }
    else if(repText===""){
      props.showAlert("Text to be replaced is Empty!!! Please type the Text","warning");
    }
    else if(repByText===""){
      props.showAlert("Text to be replaced by is empty!!! Please type the Text","warning");
    }
    else{
    props.showAlert("Text Replaced by newly entered text","success");
    }
    if(text==="" || repText==="" || repByText===""){
    }
    else{
    setRepText("");
    setRepByText("");
    }
  }
  const handleSpaceClick=()=>{
    let newText=text.split(" ");
    let finalText="";
    for (let index = 0; index < newText.length; index++) {
        let spaceText="";
        if(newText[index]===""){
            continue;
        }
        else{
            for(let n=0;n<newText[index].length;n++){
                spaceText=spaceText+newText[index][n];
                console.log(spaceText)
        }
        if(index<newText.length-1){
            finalText=finalText+spaceText+" ";
        }
        else{
            finalText=finalText+spaceText;
        }
        console.log(finalText)
    }
    }
    setText(finalText);
    if(text==="")
    {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    }
    else{
    props.showAlert("Extra spaced has been removed","success");
    }
  }
  const handleReverseClick=()=>{
    let newText=text.split(" ");
    let finalText="";
    for (let index = 0; index < newText.length; index++) {
      let reverseText="";
        for (let n =newText[index].length;n>0;n--) {
            reverseText=reverseText+newText[index][n-1];
            console.log(reverseText)
        }
        if(index < newText.length-1){
            finalText=finalText+reverseText+" ";
        }
        else{
            finalText=finalText+reverseText;
        }
    }
    setText(finalText);
    if(text==="")
    {
      props.showAlert("Textbox is Empty!!! Please type the Text","warning");
    }
    else{
    props.showAlert("Entered text has been reversed","success");
    }
  }

 
  const [text, setText] = useState("");
  const [repText,setRepText]=useState("");
  const [repByText,setRepByText]=useState("");
  const wordlength=()=>{
  let count=0;
  for (let index = 0; index < text.split(" ").length; index++) {
    if (text.split(" ")[index]==="") {
      continue;
    }
    else{
      count=count+1;
    }
  }
  return count;
}

  return (
      <div className="container" style={props.myStyleMode}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={props.myStyleMode}
            
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode}`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode} my-2 mx-3`} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode}`} onClick={handleCapitalClick}>
          Capitalize Word
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode} mx-3`} onClick={handleInvertClick}>
          Invert
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode}`} onClick={handleSpaceClick}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode} mx-3`} onClick={handleReverseClick}>Reverse</button>
        <button className={`btn btn-${props.mode==="light"?"primary": props.mode}`} onClick={handleClearClick}>
          Clear Text
        </button>
        <div className="form-floating my-2">
          <textarea
            className="form-control"
            id="floatingTextarea"
            style={props.myStyleMode}
            value={repText}
            onChange={handleRepalceText}
          ></textarea>
          <label htmlFor="floatingTextarea"><b>Text to be replaced</b></label>
        </div>

        <div className ="form-floating my-3">
        <textarea
          className="form-control"
          id="floatingTextarea"
          style={props.myStyleMode}
          // style={{width: '150px',myStyleSetMode}}
          //style={...myStyleMode} {...width}{...'150px'}
      value={repByText}
      onChange={handleReplaceBy}
      />
      <label htmlFor="floatingTextarea"><b>Replace by</b></label>
    
      <button className={`btn btn-${props.mode==="light"?"primary": props.mode} my-3`} onClick={handleReplaceClick}>Replace</button>
    <div className="container my-4" style={props.myStyleMode}>
        <h2>Your Text Summary</h2>
        <p>          
          {wordlength()} Words and {text.length} Characters{" "}
          {(1 / 125) * (text.split(" ").length - 1)} minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
</div>
</div>
  );
}
