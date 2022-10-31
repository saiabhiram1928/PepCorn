import React from 'react'
import Context from './context/Context'
import { Routes,Route, Switch, NavLink, Link } from 'react-router-dom';
import Home from './components/page/Home'
import SignIn from './components/page/SignIn'

const App = () => {
  const login=false;

  if(login == false){
  return (<>
    <Context>
    
   <Routes>
     <Route path="/home" element={ <Home/>} />
     <Route path="/login" element={ <SignIn/>} />
     <Route path="*" element={ <Home/>} />
   </Routes>


    </Context>
    </>
  )
  } else{
    return(
      <>
      <Context>

 <div>hii</div>




      </Context>
      </>
    )
  }
}


export default App