import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,

Route,

Routes
 } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light") ; 
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode= () =>{ 
    if(mode ==="light"){
    setMode("dark")
  document.body.style.backgroundColor='#363062'
  document.body.style.color='white'
showAlert("Dark Mode has been enabled","success")
document.title="TextUtils: DarkMode"
// setInterval(() => {
//   document.title = "TextUtils  is Amazing";
// }, 4000);
// setInterval(() => {
//   document.title = "Install TextUtils";
// }, 2500);
}
    else
   { setMode("light")
   document.body.style.backgroundColor='white'
   document.body.style.color='black'
   showAlert("Light Mode has been enabled","success")
   document.title="TextUtils- Home"}
  }


  return (
   <Router>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>
      <Route path="/about" exact element={<About mode={mode}/>}/>
      <Route exact path="/"  element={<Textform heading="Enter your text to Analize" mode={mode} showAlert={showAlert}/>}/>

    </Routes>
 </div></Router>
 );
}

export default App;