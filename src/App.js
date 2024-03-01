import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Portal from './Portal';
import SignUp from "./SignUp";
import Login from "./Login";
import Events from "./Events";
import Welcome from "./Welcome";
import Search from "./Search";
import Portaledit from "./Portaledit";
import Portalform from "./Portalform";
import Portaldetails from "./Portaldetails";


function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Portal" element={<Portal/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/portaledit/:portid" element={<Portaledit/>}/>
        <Route path="/portalform" element={<Portalform/>}/>
        <Route path="/portaldetails/:portid" element={<Portaldetails/>}/>
        </Routes>
      </Router>
      
      </div>
  )
}

export default App;


