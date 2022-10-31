import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {global} from '../../context/Context';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [passwd, setPasswd] = useState("")
  const {LoggedIn}=useContext(global)
const navigate=useNavigate()
  const handleEmail = (e)=>{
       setEmail(e.target.value);
  }
  const handlPasswd=(e)=>{
    setPasswd(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let user={
      email,
      passwd
    }
    LoggedIn(user)
    setEmail("")
    setPasswd("")
   navigate("/home")
    
  }
  return (
    
    <form class="text-gray-600 body-font bg-cyan-500 h-screen" onSubmit={handleSubmit}>
  <div class="container px-5 py-10  mx-auto">
    <div class="flex flex-col text-center w-full mb-10 items-center justify-center">
      <h1 class="title-font font-medium text-3xl text-gray-900 w-auto"><img src="https://app.pepcorns.com/assets/img/brand/logo-dark.png" alt="" /></h1>
      <p class="leading-relaxed mt-4"> .</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-cyan-200 rounded-lg p-8 flex flex-col mx-auto w-full mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="email"  class="leading-7 text-sm text-gray-600 font-bold text-md">Enter your mail *</label>
        <input type="email" id="email" value={email} onChange={handleEmail} autoComplete="off" required  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label htmlFor="password"  class="leading-7 text-sm text-gray-600 font-bold text-md">password *</label>
        <input type="password" id="password" onChange={handlPasswd} value={passwd} autoComplete="off" required  name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     <div>
  <div>
    <div className="flex mb-2 justify-between items-center s">
      <label class="label cursor-pointer">
      <input type="checkbox" className="checkbox checkbox-primary" name="" id=""  />
      <span class="label-text ml-2">Remember me</span>
      </label> 
      <Link to="*" className="label text-sm md:text-md link"> Forgot Password?</Link>
     
    </div>
  </div>
     </div>
      <button type="submit" class="neon btn text-slate-300 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p class="text-sm font-light text-gray-500 mt-2">
                      Don’t have an account yet? <Link to="/Signup"  class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
    </div>
  </div>
</form>

   
  )
}

export default SignIn
