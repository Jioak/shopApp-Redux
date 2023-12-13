
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({cartItem}) => {
 
  const dispatch =useDispatch();

 const removeFromCart = () => {
    dispatch(remove(cartItem.id));
    toast.error("Item Removed From Cart");
  };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  return (
  
  <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500">
  <div className="flex flex-row p-3 gap-5 items-center">
    <div className="w-[30%]">
      <img src={cartItem.image} alt="produt" className="object-cover"/>
    </div>

    <div className="w-[70%] self-start space-y-5 ml-5">

      <p className="text-xl text-slate-700 font-semibold">{cartItem.title}</p>
      <p className="text-base text-slate-700 font-medium">{cartItem.description}</p>
      <div  className="flex items-center justify-between">
        <p className="text-green-600 font-bold text-lg">${cartItem.price}</p>
        <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        onClick={removeFromCart}>
          <AiFillDelete/>
        </button>
      </div>
    </div>
  </div>
  </div>
  
  
  
  
  
  
  
  
  )
  
  
  
  

  


  

  
  
};

export default CartItem;
