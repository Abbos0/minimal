import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Minimalist from "./pages/Minimalist";
import How from "./pages/How";
import Recent from "./pages/Recent";
import Our from "./pages/Our";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Minimalist/>
      <How/>
      <Recent/>
      <Our/>

      
</div>
  );
}

export default App;
