import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState('primary')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
      document.title='TextUtils - DarkMode'
    }
    else{
      setMode('light')
      setColor('primary')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title='TextUtils'
    }
  }

  const showColor = (color) => {
    setColor(color)
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} showColor={showColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About color={color} mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze" aboutText='About' mode={mode} showAlert={showAlert} color={color} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
