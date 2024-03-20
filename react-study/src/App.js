//import logo from './logo.svg';
//import './App.css';
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//import AboutUs from "./Components/AboutUs";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState ('dark');
  const [alerts, setAlerts] = useState (null);

  const showAlerts = (message, type) => {
    setAlerts(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  }


  const toggleMode =() => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor=('#1a3358');
      showAlerts("Dark mode is enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor=('white');
      showAlerts("Light mode is enabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
    <Alerts alerts = {alerts}/>
    <div className="container my-3">
      {/*<AboutUs/>*/}
      <TextForm showAlerts = {showAlerts} heading = "Enter text below" mode ={mode} />
    </div>
    </>
  );
}


export default App;
