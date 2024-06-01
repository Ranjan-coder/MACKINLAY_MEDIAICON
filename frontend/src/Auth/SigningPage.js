import React,{useState} from 'react'
import LoginStyle from './LoginStyle.module.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { useLocation, useNavigate } from 'react-router-dom'
import docwithpatient from '../Assets/doctorwithpatient.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'


const SigningPage = () => {
    const TF =useLocation().state
    const NavigatetTo=useNavigate()

  const [Switch, setSwitch]=useState(TF)
  const handleBack=()=>{
NavigatetTo(-1)
  }
  
  return (
    <div className={LoginStyle.appContainer}>
      <div className={LoginStyle.Signing_cont}>
        <div className={LoginStyle.left_Signing_cont}>
<div className={LoginStyle.back_btn} onClick={handleBack}>
<FontAwesomeIcon icon={faArrowAltCircleLeft} /><span style={{paddingLeft:10}}>Back</span>

</div>
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