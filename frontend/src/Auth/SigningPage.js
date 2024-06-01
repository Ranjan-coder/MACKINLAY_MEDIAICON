import React,{useState} from 'react'
import LoginStyle from './LoginStyle.module.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { useLocation } from 'react-router-dom'
import docwithpatient from '../Assets/doctorwithpatient.jpg'


const SigningPage = () => {
    const TF =useLocation().state

  const [Switch, setSwitch]=useState(TF)
  
  return (
    <div className={LoginStyle.appContainer}>
      <div className={LoginStyle.Signing_cont}>
        <div className={LoginStyle.left_Signing_cont}>
          <h2 className={LoginStyle.P}>MEDI AI CONNECT</h2>
          <img src={docwithpatient} alt="doc_logo"/>
        </div>
        <div className={LoginStyle.right_Signing_cont}>
<div className={LoginStyle.center_container}>
  <div className={LoginStyle.Switch_Cont}>
    <div className={Switch==="login"?`${LoginStyle.Switch_obj}`:`${LoginStyle.Switch_obj_deactive}`} onClick={()=>setSwitch('login')}>Login</div>
    <div className={Switch==="signup"?`${LoginStyle.Switch_obj}`:`${LoginStyle.Switch_obj_deactive}`} onClick={()=>setSwitch('signup')}>Signup</div>
  </div>
{Switch==='signup'?<Signup/>:<Login/>}
</div>
        </div>

      </div>
      </div>
  )
}

export default SigningPage