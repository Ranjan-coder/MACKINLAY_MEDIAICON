import React, { Suspense, lazy } from 'react'
import {Route,Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Dashboard from '../Pages/Patient/Dashboard/Dashboard';
import DrDashboard from '../Pages/Doctor/Dashboard/DrDashboard';

const SigningPage =lazy(()=>import ('../Auth/SigningPage'))
const Landingpage =lazy(()=>import ('../Landingpage/Landingpage'))

const Routers = () => {
  const {token,usertype} =useSelector((state)=>state.User.currentUser)

  return (
    <>
       {!token && <AuthRoute/>}
       {token && usertype ==="patient" && <PatientRoute/>}
       {token && usertype ==="doctor" && <DoctorRoute/>}
    </>
  )
}
export default Routers;
function AuthRoute(){
  return(
   
    <Routes>
      <Route path='/user/login_signup' element={<Suspense><SigningPage/></Suspense>}/>
      <Route path='/' element={<Suspense><Landingpage/></Suspense>}/>
    </Routes>
   
  )
}

// All the Patient related routes should be add here
function PatientRoute(){
  return(

        <Routes>
            <Route path='/' element={<Suspense><Dashboard/></Suspense>}/> 

    </Routes>
   
  )
}

// All the Doctor related routes should be add here

function DoctorRoute(){
  return(
    <Routes>
      <Route path='/' element={<Suspense><DrDashboard/></Suspense>}/>
    </Routes>
  )
}
