import "./App.css";
import Button from "./components/Button";

const App = () => {

  const handlePost=(data:unknown)=>{
    console.log(data)
  }
  const handleGetPost=(data:unknown)=>{
    console.log(data)
  }
  const handleClick=()=>{
    console.log('clicked')
  }

  return (
    <div>
      <Button onClick={()=>handlePost(52)} color="error" variant="outlined" radius="r-full">Submit</Button>

      <Button onClick={()=>handleGetPost("i am ikbal Hossain Asif")} color="primary" variant="outlined" radius="r-none">Submit</Button>

      <Button onClick={handleClick} color="success" radius="r-lg">Submit</Button>
    </div>
  );
};

export default App;
