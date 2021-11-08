import React, { useState } from 'react';

import './App.css';

import TodoList from './todolist';
import Fun from './fun';
import Class1 from './class1';
import { Component } from 'react';

function App() {

  const[fullName,setfullName]=React.useState("");

  const[output,setoutput]=React.useState([]);

  const event=e=>{

    e.preventDefault();

    const a=[...output,fullName];

    setoutput(a);

    setfullName("");

  }

  const delete1=(indexValue)=>{

    const nt=output.filter((out,index)=>index !== indexValue);

    setoutput(nt);

  }

  return (

    <div className="App">


  
     <center>


    <h2>My TaskList</h2>

    <form onSubmit={event}>

      <input type="text"  value={fullName} onChange={(text)=>setfullName(text.target.value)}></input>&nbsp;&nbsp;

    <input type="submit" name="submit" value="submit"></input>
    </form>
      <TodoList todolist={output} delete1={delete1} ></TodoList>
    </center>  

    <div>
      <h3>exporting the functions</h3>
    
      <Fun />
     
      </div>
      <div>
       <Class1  ></Class1>
      </div>
  </div>
); 
}

export default App; 
