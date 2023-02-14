import './App.css';
import Image from "./assects/image.jpg";
import Demo from "./components/Demo";


function App() {

  var x=10;
  var text;
  if(x==10){
    text = "Equal";
  }
  else{
    text = "Not Equal";
  }


  return (
    <div className="App">
      <h1>hello world</h1>
      <h2> {50+5} </h2>
      <img src={Image} width="500px" height="650px" />
      <h3> {x>=10 ? "Greater than or equal to 10":"Not equal to 10"} </h3>
      <Demo para={x} />
      
    </div>
    
  );
}

export default App;
