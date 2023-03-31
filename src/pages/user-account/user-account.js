import React from 'react'
import "./userAccountStyle.css";
import Navbar, { NavLink, Outlet } from 'react-router-dom';
import { NavNavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';



export default function UserAccount() {
    return (
        <>
            <div className='mx-5  my-5'>
            <div className='row ' >

                <div className='col-3'>

                <ListGroup variant="flush">
                        <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }}  to='/useraccount/myaccount'><ListGroup.Item className='nav'>My Account</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/myorders'><ListGroup.Item className='nav'>My Orders</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/mywishlist'><ListGroup.Item className='nav'>My Wish List</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/accountinfo'><ListGroup.Item className='nav'>Account information</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/addressbook'><ListGroup.Item className='nav'>Address Book</ListGroup.Item></NavLink>
                </ListGroup>
                    </div>
                    
                <div className='col-9'>
                    <Outlet />
                </div>
        </div>



            </div>


        </>
    )
}
