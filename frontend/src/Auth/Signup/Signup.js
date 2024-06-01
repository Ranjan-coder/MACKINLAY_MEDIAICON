import React, { useState } from 'react';
import LoginStyle from '../LoginStyle.module.css'; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { handleUserLogin } from '../../Redux/ReduxSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const NavigatetTo =useNavigate()
  const dispatchTo=useDispatch()

  const [formData, setFormData] = useState({
    usertype: 'patient',
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    phone_number: '',
    showPassword: false,
  });

  const handleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      localStorage.setItem('email', value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5588/api/patient/signup', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      const { name, email, token, usertype } = response.data;

      // Storing user data in localStorage
      // localStorage.setItem('name', name);
      // localStorage.setItem('email', email);
      // localStorage.setItem('token', token);
      // localStorage.setItem('usertype', usertype);
      dispatchTo(handleUserLogin({ name, email, usertype,token}))

      toast.success(response.data.message);
      setFormData({
        usertype: '',
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        phone_number: '',
        showPassword: false,
      });
      setTimeout(() => {
        if(usertype){
          NavigatetTo("/");
        }
      }, 1000);


    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className={LoginStyle.login_main_contaier}>
      <Toaster />
      <form className={LoginStyle.form_container} onSubmit={handleSubmit}>
        <div className={LoginStyle.input_box}>
          <label htmlFor='usertype' className={LoginStyle.Form__inputBox_Label}>Signup as</label>
          <select name='usertype' value={formData.usertype} className={LoginStyle.Form__input} onChange={handleChange} required>
            <option value="">Select any option</option>
            <option value="doctor">I am a Doctor</option>
            <option value="patient">I am a Patient</option>
          </select>
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='name' className={LoginStyle.Form__inputBox_Label}>Name</label><br/>
          <input id="name" type='text' name='name' value={formData.name} onChange={handleChange} className={LoginStyle.Form__input} autoComplete='off' required />
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='email' className={LoginStyle.Form__inputBox_Label}>Email</label><br/>
          <input id="email" type='email' name='email' value={formData.email} onChange={handleChange} className={LoginStyle.Form__input} autoComplete='off' required />
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='phone' className={LoginStyle.Form__inputBox_Label}>Phone Number</label>
          <input type='tel' pattern="[0-9]{10}" name="phone_number" id="phone" value={formData.phone_number} className={LoginStyle.Form__input} onChange={handleChange} maxLength="10" autoComplete="off" required />
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='dob' className={LoginStyle.Form__inputBox_Label}>Date of Birth</label>
          <input type="date" name="dob" id="dob" value={formData.dob} className={LoginStyle.Form__input} onChange={handleChange} autoComplete="off" required />
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='gender' className={LoginStyle.Form__inputBox_Label}>Gender</label>
          <select name='gender' value={formData.gender} className={LoginStyle.Form__input} onChange={handleChange} autoComplete="off" required>
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={LoginStyle.input_box}>
          <label htmlFor='password' className={LoginStyle.Form__inputBox_Label}>Create Password</label>
          <input id='password' type={formData.showPassword ? "text" : 'password'} name='password' value={formData.password} onChange={handleChange} className={LoginStyle.Form__input} required />
          <span style={{ cursor: "pointer", position: "relative", right: "20px" }} onClick={handleShowPassword}>
            <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
<div className={LoginStyle.btn_cont}>
<button className={LoginStyle.Submit_btn} type='submit'>Sign Up</button>

</div>
      </form>
    </div>
  );
};

export default Signup;
