import React, {useState} from 'react' 
function Script() { 
const[counts1,setCount1,c]=useState(0); 
function incdec() 
{ 
setCount1(counts1+1) 
} 
function dec() 
{
 setCount1(counts1-1) 
}
 return ( 
<> <button onClick={incdec}>increment</button>
 <span>{counts1}</span> 
<button onClick={dec}>decrement</button> 
<button onMouseOver={incdec}> {counts1} </button> </> ) 

} 
export default Script