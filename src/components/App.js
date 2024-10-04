
import React,{useState} from "react";
function  App(){
  let [state,setState]=useState({count:0})
  let inc =()=>{
    setState({count:state.count+1})
  }
  let dec =()=>{
    setState({count:state.count-1})
    }
  let reset=()=>{
    setState({count:state.count=0})
  }
  
  
    return(
        <>
        <div  className="maincontainer">
          <h1>COUNTER</h1>
          <div className="container">
          <h1 id='num'>{state.count}</h1>
          <button alt='inc'   className="btn" onClick={inc}> +</button>
          <button alt='dec'   className="btn" onClick={dec}>-</button>
          <button alt='reset' className="btn" onClick={reset}>reset</button>
          </div>
          </div>
        </>
    )
  }

export default App;
