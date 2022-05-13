import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom';
import { AuthContext } from '../../context';
import "./Navbar.css";

const setActive = ({isActive}) => isActive ? 'isActive' : 'link';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = event=>{
      if (isAuth)
      {event.preventDefault();
      setIsAuth(false);
      localStorage.removeItem('auth')}
      else alert('You are not loged in')
    }

    return (
        <div className="navbar">
          <div className="navbar__links">
            <NavLink className={setActive} to="/about">About site</NavLink> 
            <NavLink className={setActive} to="/posts">Posts</NavLink> 
          </div>
          <button type="submit" className='logoutClass' onClick={logout}>Logout</button> 
        </div>
    )
}

export default Navbar;  