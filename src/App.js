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
    <div className="App" style={{scrollBehavior:"smooth"}}>
      <Navbar/>
      <Home/>
      <Minimalist/>
      <How/>
      <Recent/>
      <Our/>
<<<<<<< HEAD
      {/* <I/> */}
      <Example/>
=======
      <I/>
>>>>>>> ff797e05004cf32c8d2ca95c79defbbbd29d9838
      <Let/>
     


      
</div>
  );
}

export default App;
