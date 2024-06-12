import React,{useEffect, useState} from 'react'


function App() {

  const [fullname,setFullname]=useState('')
  const [first,setFirst]=useState('')
  const [last,setLast]=useState('')

  const handlesubmit=(e)=>{
    e.preventDefault()
    setFullname(first+' '+last)
  }
  
  return (
    <div className="App">
      <h1 >Full Name Display</h1>
<form onSubmit={handlesubmit}>
  <p><span>First Name:</span> <span><input value={first} onChange={(e)=>setFirst(e.target.value)} type="text" required/></span></p>
  <p><span>Last Name:</span> <span><input value={last} onChange={(e)=>setLast(e.target.value)} type="text" required/></span></p>
  <button type="submit" >Submit</button>
</form>

    {/* { first.length>0 && last.length>0 && (<p>Full Name: {first+' '+last}</p>)} */}
    {fullname? (<p>Full name : {fullname}</p>):''}
    </div>
  );
}

export default App;
