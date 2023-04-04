import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-6xl text-blue-500 mt-8 p-5 ">Welcome to my TailwindCssWith vite world</h1>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
