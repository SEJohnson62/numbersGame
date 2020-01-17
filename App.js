import React, {useState} from 'react';
import './App.css';

const numArray = [];

function getRandomNum () {
  const randomNum = Math.floor(Math.random()*10);
  console.log(randomNum);
  numArray.push(randomNum);
  return randomNum;
}

function App() {
  const [number, setNumber] = useState(0);
  function addNumber(){
    const number = getRandomNum();
    setNumber({number})
    console.log(numArray);
  }
  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      <h2>All {numArray.length} Numbers</h2>
      <ul>

      </ul>
    </div>
  );
}

export default App;
