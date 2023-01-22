import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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

    }
    else{
      setMode('light')
      setColor('primary')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const showColor = (color) => {
    setColor(color)
  }

  return (
    <>
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} showColor={showColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading='Enter Text to Analyze' mode={mode} color={color}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
