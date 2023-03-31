import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjFooter from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
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
      <ProjFooter />
    </div>
  );
}

export default App;
