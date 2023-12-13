import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../logo.png';


const Navbar = () => {

 const {cart}=useSelector((state)=>state)

  return (

    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto " >


<NavLink to='/'>
  <div className="ml-6">
    <img src={logo} alt="" srcset="" className="h-14" />
  </div>
</NavLink>

<div className="flex gap-x-6  text-slate-100 items-center -tracking-tighter font-medium ">
  <NavLink to='/'>
<p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">Home</p>
  </NavLink>
  
  <NavLink to='/cart'>
    <div className="relative">
    <FaShoppingCart className="text-2xl"/>
    {
      cart.length>0 && 
      <span className="absolute -top-1 -right-2 bg-green-600 rounded-full w-5 h-5 grid  text-sm justify-items-center animate-bounce text-white ">
        {cart.length}</span>
    }
    </div>
  </NavLink>
</div>
    
    
    
    
    </div>
  )
};

export default Navbar;
