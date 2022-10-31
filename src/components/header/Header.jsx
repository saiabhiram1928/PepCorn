import React, { useState,useContext, useCallback } from "react";
import  { useNavigate,Link } from "react-router-dom";
import 'animate.css';

import {global} from '../../context/Context'

const Nav=()=> {
const {login,LogOut,user} = useContext(global)
const navigate=useNavigate()
const handleDashboard=()=>{
  if(login==true){

  }else{
    let text="UNAUTHORISED ACCESS Redirecting to login"
    if(window.confirm(text)===true) navigate("/login")

    
  }
}
const handleLogout=useCallback(()=>{
   LogOut();
   navigate("/home")
})
  return (
    <div className="navbar justify-between items-center px-4 shadow-lg bg-cyan-300" >
  <div className="flex md:ml-10 ">

    <a className=" p-2 font-extrabold normal-case text-xl">Pepcorn</a>
    
  </div>
  <div class=" md:mx-20 flex justify-center w-1/3 sm:h-full items-center">

    <button onClick={handleDashboard} className="md:transition md:ease-in-out md:;delay-150 md:;hover:-translate-y-px hover:scale-110  duration-300 items-center py-1 px-3 focus:outline-none  hover:bg-gray-400 cursor-pointer rounded text-base md:mt-0  ">
    <p>Dashboard</p>
    </button>

    </div>
    
     
      
        {
          login===false ? ( 
            <Link to="/login">
          <button className="btn btn-accent flex md:mr-20 animate__animated animate__heartBeat animate__slow animate__repeat-3">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>



          </button>
          </Link>): (
             <div className="dropdown dropdown-end md:mr-20 w-1/12  justify-center h-full">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            <div className="w-15 rounded-full flex items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-indigo-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

</div>
</label>
 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
 <li>
   <p className="justify-between font-bold btn no-animation btn-ghost max-auto">
     Welcome Back
  
   </p>
 </li>
 <li>
  <p className=" font-mono cursor-text">{user.email}</p>
 </li>

 <li onClick={handleLogout} className="cursor-pointer btn btn-ghost rounded-lg text-start">Logout</li>
</ul>
</div>
          )
        }
        
      
     
    </div>
  

  );
}

export default Nav;