import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';
import {BrowserRouter as Router, Switch, Route
} from "react-router-dom";

 function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success'); 
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar/> */}
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    
          <Route exact path="/about">  {/*exact keyword is used for exact matching of path. if we do not use this keyword then our path will be mismatch*/}
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
  </Router>
    </> 
  );
}
export default App;