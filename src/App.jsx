import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
 
 <div className="">
<div className="bg-slate-900">
  <Navbar/>
  </div>
  <div>
    <Routes>
      <Route path="/shopApp-Redux"  element={<Home/>}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
  </div>
 </div>
 
 
 
 
  )
 
 
};

export default App;