
import './App.css';
import Restaurents from './components/Restaurents';
import restaurents from './data/reastaurents.json';
import React,{useState} from 'react';

function App() {
  const [data,setData]=useState(restaurents)
  return (
    <div className="App">
     Hello

     <Restaurents restaurents={data}/>
    </div>
  );
}

export default App;
