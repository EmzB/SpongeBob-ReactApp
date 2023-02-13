import React from 'react';
import {useState} from 'react'
import './App.css';
import data from './users.js'
import Results from './results.js'
function App() {
  const [users, setUsers]= useState(data)
  return (
    <main>
<h2>Bikini Bottom Register {users.length} </h2>
<div className="buttons"> 
<button className="map" onClick={()=> console.log("map works")}>Map</button>
<button className="filter" onClick={()=> console.log("filter works")}>Filter</button>
<button className="reduce" onClick={()=>console.log("reduce works")}>Reduce</button>
</div>
<Results users={users}/>
 </main>  
  );
}

export default App;
