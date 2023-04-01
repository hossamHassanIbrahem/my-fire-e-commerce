import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjFooter from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
<<<<<<< HEAD
//// F ////
import UserAccount from './pages/user-account/user-account';
import { Route, Routes } from 'react-router-dom';
import MyAccount from './component/myAccount/myAccount';
import MyOrders from './component/myOrders/myOrders';
import MyWishList from './component/myWishList/myWishList';
import AddressBook from './component/addressBook/addressBook';
import AccountInformation from './component/accountInformation/accountInformation';
/////

=======
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
>>>>>>> ahmed-ali
// require('dotenv').config()
function App() {
  return (
    <div className="App container-fluid" >
      <Header />

      <Routes>
      {/* <Route path='/' element={<Login/>} >  </Route> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />

    </Routes>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Routes>
          <Route path='/useraccount' element={<UserAccount />}>

            <Route index element={<MyAccount/>}/>
            <Route  path='myaccount' element={<MyAccount/>}/>
            <Route  path='myorders' element={<MyOrders/>}/>
            <Route  path='mywishlist' element={<MyWishList/>}/>
            <Route path='addressbook' element={<AddressBook />}/>
            <Route  path='accountinfo' element={<AccountInformation/>}/>


          </Route>



        </Routes>


      <ProjFooter />
    </div>
  );
}

export default App;
