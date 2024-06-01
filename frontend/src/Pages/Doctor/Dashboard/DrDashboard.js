import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { handleUserLogOut } from '../../../Redux/ReduxSlice'

const DrDashboard = () => {
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
<div >
<h1>Welcome to the Doctor Dashboard</h1>
    <button onClick={handleLogout}>Logout</button>

</div>
</>  )
}

export default DrDashboard