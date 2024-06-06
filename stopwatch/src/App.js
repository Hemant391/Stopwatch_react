import { useEffect, useState } from "react";


function App() {
  const [running,setRunning]=useState(false)
  const [time,setTime]=useState(0);
  
useEffect(()=>{
  let interval;
  if(running){
    interval=setInterval(()=>setTime(time+1),1000)
  }
  return ()=>clearInterval(interval)
},[running,time])

const minutes = Math.floor((time /60) );

const seconds = Math.floor((time %60) );
  const handlerun=()=>{
    setRunning(!running)

}

  const resettime=()=>{
    setTime(0)
  }
  return (
    <div className="App">
     <h1>Stopwatch</h1>
     <p>{'Time: '+ minutes.toString().padStart(1,"0")+":"+seconds.toString().padStart(2,'0')}</p>
     <button type="button" onClick={handlerun}>{running?'Stop':'Start'}</button>
     <button onClick={resettime}>Reset</button>
    </div>
  );
}

export default App;
