import React,{useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] =useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  async function login()
  {
    console.warn(email,pass)
    let item={email,pass};
    let result= await fetch("http://localhost:8000/api/login", {
      method:'POST' ,
      header:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    });
    result = await result.json();
    if(result.error)
    {
        alert(result.error)
    }
    else
    {
       localStorage.setItem('user-info',JSON.stringify(result))
       navigate("./home") 
    }


  }
  return (
    <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email@gmail.com" name="email" id="email" />
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" name="password" id="password" />
            <button type="submit" onClick={login} >Login</button> 
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register here</button>
        </div>
  )
}

export default Login