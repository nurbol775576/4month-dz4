
import {useState} from "react";
function App() {
 const [num,setNum] = useState(0);
  return (
    <div className="App">
    <h1>{num}</h1>
   <button onClick={() =>{
    if(num < 15){
      setNum(num + 15);
    }
   }}>max</button>
   
  <button onClick={() =>{
    if(num > 1){
      setNum(num - 14 )
    }
  }}>min</button>


 
 <button onClick={() =>{
  if(num < 15){
    setNum(num +5);
  }
}}>+5</button>
    </div>
  );
}

export default App;



//if = если
//{} = фигурные скопки
//else = двоеточе



















