import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import LoginStyle from '../LoginStyle.module.css'
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleUserLogin } from '../../Redux/ReduxSlice';

const Login = () => {
  const NavigatetTo =useNavigate()
  const dispatchTo =useDispatch()
  const [formData, setformData] = useState({
    email: "",
    password: "",
    ShowPassword: false
  })
  const handleShowPassword = () => {
    setformData({ ...formData, ShowPassword: !formData.ShowPassword });

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });


  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5588/api/patient/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      const {token}=response.data;
      const { name, email, usertype } = response.data.user;
      // localStorage.setItem('name', name);
      // localStorage.setItem('email', email);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('usertype', usertype);
      dispatchTo(handleUserLogin({ name, email, usertype,token}))

      toast.success(`Welcome back, ${name}!`);
      setTimeout(() => {
        if(usertype){
          NavigatetTo("/");
        }
      }, 1000);


    } catch (error) {
      if (error.response) {
        toast.error(` ${error.response.data.message || 'Invalid Credentials'}`);
      } else if (error.request) {
        toast.error('No response received from the server.');
      } else {
        toast.error('An error occurred.');
      }
    }
  };
  return (
    <div className={LoginStyle.login_main_contaier}>
      <form className={LoginStyle.form_container} onSubmit={handleSubmit}>
        <div className={LoginStyle.input_box}>
          <label htmlFor='email' className={LoginStyle.Form__inputBox_Label}>Email</label><br />
          <input id="email" type='email' name='email' value={formData.name} onChange={handleChange} className={`${LoginStyle.Form__input}`} required autoComplete='off' />
        </div>
        <div className={LoginStyle.input_box}>
          <label htmlFor='password' className={LoginStyle.Form__inputBox_Label}>Password</label><br />
          <input id='password' type={formData.ShowPassword ? "text" : 'password'} name='password' value={formData.password} onChange={handleChange} className={`${LoginStyle.Form__input}`} required />
          <span
            style={{
              cursor: "pointer",
              position: "relative", right: "20px"
            }}
            onClick={handleShowPassword}
          >
            <FontAwesomeIcon
              icon={formData.ShowPassword ? faEyeSlash : faEye}
            />
          </span>

        </div>
        <button className={LoginStyle.Submit_btn} type='submit'>Login</button>

      </form>


    </div>
  )
}

export default Login