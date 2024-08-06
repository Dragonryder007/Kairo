import './App.css';

import AboutCom from './components/AboutCom';
import About from './components/About';
//import EmployeeForm from './components/EmployeeForm';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="KAIRO GLOBAL PVT LTD" aboutText="About" />
      <div className="container my-3">
        <AboutCom />
       
        {/* <TextForm heading="Enter text here!"/> */}
      </div>
      <div className="container my-3">
         <About />
      </div>      
    </>
  );
}

export default App;