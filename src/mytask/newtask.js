import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const[firstvalue,setfirstvalue]=React.useState("");
  const[output,setoutput]=React.useState([]);

  const items=(even)=> {
    setfirstvalue(even.target.value)
  }

  const  display=()=> {
    setoutput((oldvalue)=> {
      return [...oldvalue,firstvalue];

    });

    setfirstvalue('');
  }
  return (
    <div className="App" >
      <div className="main">
        <h1>My TaskList</h1>
        <br/>
        <input type="text"  placeholder='Enter the text' onChange={items} value={firstvalue}   />
        <button onClick={display}  >Add</button>

        <ol>
         { output.map((element) => {
            
           
            return <li>{element}  </li>
          })
          }

        </ol>

      </div>
    

    </div>


  );
}

export default App;