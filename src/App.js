import React, { useEffect, useState } from 'react';
import AppRouter from './components/App.Router';
import { AuthContext } from './components/context';
import Navbar from './components/UI/navbar/Navbar';
import "./styles/App.css";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value ={{
    isAuth,
    setIsAuth
    }}><div>
      <Navbar/>
      <AppRouter/>
      </div>
    </AuthContext.Provider>
  )

}

export default App;
