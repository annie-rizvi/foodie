import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {useState} from 'react';

function App() {
  let [currentComponent, updateCurrentComponent] = useState("signup");
  Comp = () => {
    if(currentComponent === "signup")
    {
      return <SignUp updateCurrentComponent = {updateCurrentComponent}></SignUp>;
    }
    else if (currentComponent ===  "signin")
    {
      return <SignIn updateCurrentComponent = {updateCurrentComponent}></SignIn>;
    }
  };
  return (
    <div className="App">
      <Comp/>
    </div>
  );


  
}

function Comp()
{
  
}

export default App;
