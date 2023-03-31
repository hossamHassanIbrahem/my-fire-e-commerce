
import Form from 'react-bootstrap/Form';
import './accountInformationStyle.css';
import { useState,React } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import updateUserInfo from './../../Store/actions/updateInfo';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



export default function AccountInformation() {
  const firstName = useSelector((state) => state.updateInformation.firstName)
  const lastName = useSelector((state) => state.updateInformation.lastName) 
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fname: firstName,
    lname: lastName
  })


  
  const handleSubmit = (e) => {
    e.preventDefault()}

  const handleForm = (ev) => {
    switch (ev.target.name) {
      case "fname":
        setUser({ ...user, fname: ev.target.value });
        break;

      case "lname":
        setUser({ ...user, lname: ev.target.value });
        break;
      // default:
      //   return

    }
  }

  dispatch(updateUserInfo(user))

  return (<>
  <h4>Edit Account Information</h4>
  <div className='container'>
      <form onSubmit={(evt) => { handleSubmit(evt) }} action='/myaccount'>
        {/* first name */}
    <label htmlFor='fname' className='label'>first name</label><br/>
        <input type="text" id="fname" name="fname" placeholder='Enter Your First Name' value={user.fname} onChange={(event) => { handleForm(event) }}  /><br/>

        {/* last name */}
    <label htmlFor='lname' className='label'>Last name</label><br/>
        <input type="text" id="lname" name="lname" placeholder='Enter Your Last Name' value={user.lname} onChange={(event) => { handleForm(event) }} /><br/>
        {/* birth date */}
    <label htmlFor='date' className='label'>Birth Date</label><br/>
      <input type="date" id="date" name="date" placeholder='chose your birth date'/>
        {/* <button className="date-btn">Select Date</button> */}
        <br/><br/>
        <button className="submit"type='submit'>Save</button>

  </form>
  
  </div>

  
  </>
  )
  }
