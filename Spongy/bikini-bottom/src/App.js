import './App.css';
import users from './users.js'
import results from './results.js'
function App() {
const [products, setProducts] = useState(products)
  return (
    <main>
<h2>Bikini Bottom Register</h2>

 <div className="btns">
  <button onclick={()=> console.log("map")}> Map</button>
  <button onclick={()=> console.log("reduce")}>Reduce</button>
  <button onclick={()=> console.log("filter")}>Filter</button>
  <results/>
 </div> 
 </main>  
  );
}

export default App;
