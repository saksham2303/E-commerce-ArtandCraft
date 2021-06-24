import './App.css';
import React,{useEffect,useState} from 'react';
import Checkout from "./Components/Checkout";
import {StoreProvider} from './store'

function Greeter(props) {
  return <div>hello {props.name}</div>;
};



function Counter(){
 let [count, setCount] = useState(0);

 useEffect(()=>{
   console.log('update');
 },[count])

 function increase(){
  setCount(count+1)
}

 return(
   <div>
     My count: {count}
     <button onClick={increase}>+1</button>
     {count%2 == 0 ? <Greeter name = "Event" />:null}
   </div>
 )
}

function App() {
  return (
    <div>
     
      <Checkout/>
      

    </div>
  );
}

export default App;
