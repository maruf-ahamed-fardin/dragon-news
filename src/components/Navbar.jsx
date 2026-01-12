import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user ,logOut}= use(AuthContext)
    const handleLogOut = () =>{
        console.log('User trying to Logout')
        logOut().then(() => {
  alert('you logOut successfully')
}).catch((error) => {
 console.log(error);
});

        
    };
    return(
        <div className='flex justify-between '>
            <div className="">{user && user.email}</div>
            <div className=" ml-45 text-accent Nav items-center space-x-3 ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className="login-btn flex gap-5">
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
                }
              
            </div>
        </div>
    );
};

export default Navbar;