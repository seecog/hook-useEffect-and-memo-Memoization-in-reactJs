import React,{useReducer} from 'react';


let iniState = {
  count : 0
}

let reducer = (name,runs)=>{
switch(runs.type){
  case 'six':
  return {
    count : name.count+6
  }
  case 'four':
  return {
    count : name.count+4
  }
  case 'single':
  return  {
count : name.count + runs.val
  }
}
}


const Cricket = ()=>{
const [name,dispatch] = useReducer(reducer,iniState);
return (
  <div>
The count is : {name.count}<br/>
<button onClick={()=>dispatch({type : 'six'})}>Six</button> | 
<button onClick={()=>dispatch({type : 'four'})}>Four</button> | 
<button onClick={()=>dispatch({type : 'single',val : 1})}>Single</button> 
  </div>
)
}

export default Cricket;

