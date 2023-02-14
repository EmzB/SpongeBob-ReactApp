import React from 'react';
import {useState} from 'react'
import './App.css';
import data from './users.js'
import Results from './results.js'
function App() {
  const [users, setUsers]= useState(data)
  return (
    <main className="main">
<Results users={users}/>
 </main>  
  );
}

export default App;
