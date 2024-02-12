//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//import AboutUs from "./Components/AboutUs";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState ('dark');
  const toggleMode =() => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor=('#1a3358');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor=('white');
    }

  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
    <div className="container my-3">
      {/*<AboutUs/>*/}
      <TextForm heading = "Enter text below" mode ={mode} />
    </div>
    </>
  );
}


export default App;
