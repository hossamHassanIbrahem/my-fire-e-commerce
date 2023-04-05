// <<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Components/products/Products";
import ProjFooter from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
// <<<<<<< HEAD
//// F ////
import UserAccount from './pages/user-account/user-account';
// import { Route, Routes } from 'react-router-dom';
import MyAccount from './component/myAccount/myAccount';
import MyOrders from './component/myOrders/myOrders';
import MyWishList from './component/myWishList/myWishList';
import AddressBook from './component/addressBook/addressBook';
import AccountInformation from './component/accountInformation/accountInformation';
/////

// =======
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
// >>>>>>> ahmed-ali
// =======
import React , {useState, useEffect} from 'react';
import "./App.css";
// import ProjFooter from "./Layouts/Footer/Footer";
// import Slider from './Components/Slider/Slider'
import InternalNav from './Layouts/InternalNav/InternalNav'
import ProjectNav from './Layouts/Nav/ProjectNav'
import Amazon from './Components/Amazon/Amazon';
import Cart from './Components/cart/Cart';
import './Components/Amazon/amazon.css';
// >>>>>>> marina_samy
// require('dotenv').config()
function App() {
  const [show, setShow] = useState(true);
	// const [cart , setCart] = useState([]);
	let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []   // local storge to get cart 
  );
	const [warning, setWarning] = useState(false);


	useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));    // local storge to save cart in it

    console.log(`Saved ${cart.length} items to localstorage`);
  }, [cart]); 



	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
			// console.log(product)
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;

		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <div className="App container-fluid" >
      <Header />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <ProjFooter />
    </div>
  );
}

export default App;
