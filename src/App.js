import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Minimalist from "./pages/Minimalist";
import How from "./pages/How";
import Recent from "./pages/Recent";
import Our from "./pages/Our";
import I from "./pages/I";
import Let from "./pages/Let";
import Example from "./pages/Example";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Minimalist/>
      <How/>
      <Recent/>
      <Our/>
      {/* <I/> */}
      <Example/>
      <Let/>
     


      
</div>
  );
}

export default App;
