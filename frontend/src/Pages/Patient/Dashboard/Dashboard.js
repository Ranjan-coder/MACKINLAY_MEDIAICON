import React from 'react'
import DashboardStyle from './Dashboard.module.css'
import { handleUserLogOut } from '../../../Redux/ReduxSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const dispatchTo =useDispatch()
  const{email,name}=useSelector((state)=>state.User.currentUser)
  console.log(email,name);

 async function handleLogout(){
    try {
      dispatchTo(handleUserLogOut());

      const response = await axios.post(`http://localhost:5588/api/patient/logout?email=${email}`,);
      
      if (response.status !== 200) {
        throw new Error('Logout failed');
      }
      toast.success(`${name} Logged out !!`);
      // setTimeout(() => {
      //   navigateTO("/login");
      // }, 1000);
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.');
    }
  }
  return (
<>
<div className={DashboardStyle.backgroundcolour}>
<h1>Welcome to the Patient Dashboard</h1>
    <button onClick={handleLogout}>Logout</button>

</div>
</>  )
}

export default Dashboard