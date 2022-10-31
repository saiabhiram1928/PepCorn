import React,{createContext,useState} from 'react'




const global =createContext();
const Context = ({children}) => {
    const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
    const LoggedIn=(user)=>{
      setLogin(true)
      setUser(user)
    }
    const LogOut=()=>{
      setLogin(false)
      setUser({})
    }
  return (
   <global.Provider value={{login,LoggedIn,LogOut,user}}>
    {children}
   </global.Provider>
  )
}

export default Context
export {global}

