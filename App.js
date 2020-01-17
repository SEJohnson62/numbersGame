import React, {useState} from 'react';
import './App.css';

const numArray = [];

function getRandomNum () {
  const randomNum = Math.floor(Math.random()*10);
  console.log(randomNum);
  numArray.push(randomNum);
  return;
}

function App() {
  const [count, addCount] = useState(0);

  return (
    <div>
      <button onClick={getRandomNum}>Add Number</button>
    </div>
  );
}

export default App;
