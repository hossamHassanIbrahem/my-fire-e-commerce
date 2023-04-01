import "./App.css";
import ProjFooter from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
//// F ////
import UserAccount from './pages/user-account/user-account';
import { Route, Routes } from 'react-router-dom';
import MyAccount from './component/myAccount/myAccount';
import MyOrders from './component/myOrders/myOrders';
import MyWishList from './component/myWishList/myWishList';
import AddressBook from './component/addressBook/addressBook';
import AccountInformation from './component/accountInformation/accountInformation';
/////

// require('dotenv').config()
function App() {
  return (
    <div className="App container-fluid" >
      <Header />
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
