import './App.css';
import Child from './child'

function App() {
  return (
    <div className="App">
    <h1>You Are in Xyz Resturant</h1>
     <Child  dish="Biryan" sweetdish="halwa"/>
     <hr />
     <Child  dish="Paya" sweetdish="Jalebi"/>
     <hr />

     <Child  dish="Nirhari" sweetdish="lab e shree"/>
     <hr />


    </div>
  );
}

export default App;
