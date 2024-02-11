//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-3">
      {/*<AboutUs/>*/}
      <TextForm heading = "Enter text below" />
    </div>
    </>
  );
}

export default App;
