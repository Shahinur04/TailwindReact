import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import PhoneBar from "./Components/PhoneBar/PhoneBar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-6xl text-blue-500 mt-8 p-5 ">Welcome to my TailwindCssWith vite world</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
