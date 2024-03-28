//import logo from './logo.svg';
//import './App.css';
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/aboutUs",
  //     element:<><Navbar/><AboutUs/></>
  //   },
  //   {
  //     path: "/",
  //     element: <><Navbar/><TextForm/> </>
  //   }

  // ])

  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />}>
  //         <Route index element={<App />} />
  //         <Route path="aboutUs" element={<AboutUs />} />
  //         {/* <Route path="*" element={<NoPage />} /> */}
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  const [mode, setMode] = useState ('light');
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
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor=('white');
      showAlerts("Light mode is enabled","success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor=('#1a3358');
      showAlerts("Dark mode is enabled","success");
      
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}   />
    {/* <RouterProvider router={router} /> */}
    <Alerts alerts = {alerts}/>
    <div className="container my-3">
      {/*<AboutUs/>*/}
      <TextForm showAlerts = {showAlerts} heading = "Try TextUtils - Word/Character Counter | Uppercase | Lowercase | Remove extra spaces" mode ={mode} />
    </div>
    </>
  );
}


export default App;
