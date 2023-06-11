import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Login = ({ user,setUser }) => {
  const [loginFormData, setLoginFormData] = useState({
    password:'',
    email:''
  });

//  password:'cityslicka',
// email:'eve.holt@reqres.in'

  function handleChange(e) {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    axios
      .post("https://reqres.in/api/login", loginFormData)
      .then((result) => {
        console.log(result.data);
      setUser(result.data)  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <h2>Task manager Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={loginFormData.email}  name="email" onChange={handleChange} />
        </div>
        <div>
          <label>password:</label>
          <input type="password" value={loginFormData.password} name="password" onChange={handleChange} />
        </div>
        <button className="login-btn">Login</button>
       <p>note = Use 
        email : eve.holt@reqres.in <br and />
        password : cityslicka
        </p>
        <h4>click on login button</h4>
      </form>
    </div>
  );
};

export default Login;
