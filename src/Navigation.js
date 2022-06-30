import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Signup from "./Signup";
import Signup2 from "./Signup2";
import Profilelist from "./Profilelist";

function Navigation(){
  return(
  
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<App/>}></Route>
<Route path="/Signup" element={<Signup/>}></Route>
<Route path="/Signup2" element={<Signup2/>}></Route>
<Route path="/Profile" element={<Profile/>}></Route>
<Route path="/Profilelist" element={<Profilelist/>}></Route>
    </Routes>
    </BrowserRouter>
    
  
  );
}export default Navigation;