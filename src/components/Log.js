import { useState } from "react";
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';


function Log() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="App">
     <Navbar/>
     <div className="Login">{
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
    </div>
  );
}

export default Log;
