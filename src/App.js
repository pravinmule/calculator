import { useState } from 'react';
import './App.css';



function App() {
const [calc, setcalc] = useState("");
const [result, setresult] = useState("");

const ops=['/',"*",'+','-','.']

const updatecalc=value=>{
  if(
    ops.includes(value)&& calc==='' ||
    ops.includes(value) && ops.includes(calc.slice(-1))
  ){
    return
  }
  setcalc (calc+value)
  if(!ops.includes(value)){
    setresult(eval(calc+value).toString())
  }
}

  const createDigit=()=>{
    let number=[]
    for (let i = 1; i < 10; i++) {
       number.push(
        <button onClick={()=>updatecalc(i.toString())}>{i}</button>
        )
      
    }
    return number
  }

  const calculate=()=>{
    setcalc(eval(calc).toString())
  }
  const deletlast=()=>{
    if (calc === ''){
      return 
    }
    const value =calc.slice(0,-1)
    setcalc(value)
  }
  return (
    <div className="app">
      <div className="calculator">

      <div className="display">
        {result ? <span>({result})</span>:""} &nbsp;{calc || "0"}
      </div>
      <div className="operator">
        <button onClick={()=>updatecalc("/")}>/</button>
        <button onClick={()=>updatecalc("*")}>*</button>
        <button onClick={()=>updatecalc("+")}>+</button>
        <button onClick={()=>updatecalc("-")}>-</button>

        <button onClick={deletlast}>Del</button>
      </div>
      <div className="digit">
        {createDigit()}
        <button onClick={()=>updatecalc("0")}>0</button>
        <button onClick={()=>updatecalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
        </div>
  );
}

export default App;
