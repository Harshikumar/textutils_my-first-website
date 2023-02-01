import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
let backupMode="";
let changeMode="";
function App() {
  let myStyle={
    color: "black",
    backgroundColor: "white",
   
     }
  
  const[alert,setAlert]=useState(null);
  const [mode,setMode]=useState("light");
  const[myStyleMode,myStyleSetMode]=useState(myStyle);
  const showAlert=(message,type)=>{
        setAlert({msg: message,
        type: type});
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }
  
  const setbackupmode=()=>{
    backupMode=mode;
    console.log(backupMode)
  
  }
  const handleSuccess=()=>{
    if(changeMode!=="success" || "danger" || "warning" || "secondary" || "info"){
      setbackupmode();
    }
    document.body.style.backgroundColor="#40a940";
    myStyle={
      color: "black",
      backgroundColor: "#40a940"
       }
      myStyleSetMode(myStyle);
      setMode("success")
      showAlert("Green theme applied","success");
      
  }
  

  console.log(mode)
  const handleDanger=()=>{
    if(mode!=="success" || "danger" || "warning" || "secondary" || "info"){
      setbackupmode();
    }
    document.body.style.backgroundColor="#df5f5f";
    myStyle={
      color: "black",
      backgroundColor: "#df5f5f"
       }
      myStyleSetMode(myStyle);
      setMode("danger")
      showAlert("Red theme applied","success");
    

  }
  const handleWarning=()=>{
    if(mode!=="success" || "danger" || "warning" || "secondary" || "info"){
      setbackupmode();
    }
    document.body.style.backgroundColor="#d38a1ee0";
    myStyle={
      color: "black",
      backgroundColor: "#d38a1ee0"
       }
      myStyleSetMode(myStyle);
      setMode("warning")
      showAlert("Orange theme applied","success");
    
    
  }
  const handleSecondary=()=>{
    if(mode!=="success" || "danger" || "warning" || "secondary" || "info"){
      setbackupmode();
    }
    document.body.style.backgroundColor="#bbb3b3";
    myStyle={
      color: "black",
      backgroundColor: "#bbb3b3"
       }
      myStyleSetMode(myStyle);
      setMode("secondary")
      showAlert("Grey theme applied","success");
    
    
  }
  const handleInfo=()=>{
    if(mode!=="success" || "danger" || "warning" || "secondary" || "info"){
      setbackupmode();
    }
    document.body.style.backgroundColor="#1a83ab";
    myStyle={
      color: "black",
      backgroundColor: "#1a83ab"
       }
      myStyleSetMode(myStyle);
      setMode("info")
      showAlert("Blue theme applied","success");
    
    
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      myStyle={
        color: "white",
        backgroundColor: "#071128"
         }
        myStyleSetMode(myStyle);
        document.body.style.backgroundColor="#071128";
        showAlert("Dark Mode Enabled","success");
    }
    else if(mode==="dark"){
      setMode("light");
      myStyle={
        color: "black",
        backgroundColor: "white"
         }
         myStyleSetMode(myStyle);
         document.body.style.backgroundColor="white";
         showAlert("Light Mode Enabled","success");
    }
  else if(mode==="success" || "danger" || "warning" || "secondary" || "info"){
      if(backupMode==="dark"){
        setMode("light");
        myStyle={
          color: "black",
          backgroundColor: "white"
           }
           myStyleSetMode(myStyle);
           document.body.style.backgroundColor="white";
           showAlert("Light Mode Enabled","success");        
      }
      else if(backupMode==="light"){
        setMode("dark");
        myStyle={
          color: "white",
          backgroundColor: "#071128"
           }
          myStyleSetMode(myStyle);
          document.body.style.backgroundColor="#071128";
          showAlert("Dark Mode Enabled","success");
      }
      

    }
    
  }
 

  return (
    <div style={myStyleMode}>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} handleSuccess={handleSuccess} handleDanger={handleDanger} handleWarning={handleWarning} handleSecondary={handleSecondary} handleInfo={handleInfo} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About myStyleMode={myStyleMode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} myStyleMode={myStyleMode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      
      </div>
      </Router>
    </div>
  );
}

export default App;
