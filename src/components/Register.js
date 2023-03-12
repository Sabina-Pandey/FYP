import React,{ useState, } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    // const handleclick = {
    //   navigate("./login")
    // }
    async function signUp()
    {
      let item={name, email, pass}
      console.warn(item)

      let result= fetch("http://localhost:8000/api/register", {
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'
        }
      })
      result = await result.json()
      if(result.error)
      {
          alert(result.error)
      }
      else
      {
         localStorage.setItem('user-info',JSON.stringify(result))
         navigate("./home") 
      }
      // localStorage.setItem("user-info",JSON.stringify(result))
      // navigate("./home")

    }
  return (
    <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="full name" type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email@gmail.com" name="email" id="email" />
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" name="password" id="password" />
            <button type="submit" onClick={signUp} >SignUp</button> 
          </form>
             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
    </div>
  )
}

export default Register