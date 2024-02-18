import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Minimalist from "./pages/Minimalist";
import How from "./pages/How";
import Recent from "./pages/Recent";
import Our from "./pages/Our";
import Let from "./pages/Let";
import Example from "./pages/Example";
import Send from "./pages/Send";


function App() {
  return (
    <div className="App" style={{scrollBehavior:"smooth"}}>
      <Navbar/>
      <Home/>
      <Minimalist/>
      <How/>
      <Recent/>
      <Our/>
      <Example/>
      <Let/>
      <Send/>
</div>
  );
}

export default App;
