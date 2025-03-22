import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStrorage, setLocalStrorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData.employees)
  

  const handleLogin =(email,password)=>{
    if(email =='admin@me.com' && password =='123'){
      setUser('admin')
    }
    else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials")
    }

  }
 
const data = useContext(AuthContext)
console.log(data)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App