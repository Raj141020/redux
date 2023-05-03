import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import { Users } from './Users';
// import{Student} from './Student'

import React,{useState} from 'react';

function App() {

  const [data, setData] = useState(null)
  const [print,getPrint] = useState(false)

  function getResult(val){
    console.log(val.target.value)
    setData(val.target.value)
    getPrint(false)
  }
  return (
    <div className="App">
      {
        print?<h1>{data}</h1>:null
      }
     <input type="text" onChange={getResult} />
     <button onClick={()=>getPrint(true)}>Click</button>
     
    </div>
  );
}

export default App;
