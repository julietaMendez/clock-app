import {useState} from 'react'
import "./auth.css"
export default function Signup() {
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const[email, setEmail] = useState("")
  const[pass, setPass] = useState("")

  const handleFirstName = (e: any) => {
    console.log("event", e.target.value)
    setFirstName(e.target.value)
  }

  
  const handleLastName = (e: any) => {
    console.log("event", e.target.value)
    setLastName(e.target.value)
  }

  const handleEmail = (event: any) =>{
    console.log("event", event.target.value)
    setEmail(event.target.value)
  }

  const handlePass = (e: any) => {
    console.log("event", e.target.value)
    setPass(e.target.value) 
  }

  const signup = () => {
    console.log(email, pass)
    //sending to server
  }

  return (
    <div className="page bottom">
      <br></br>

      <form className="signup-container">
        <h1 className="title">Soon To Be Named App</h1>
        <h2 className="subtitle">Sign up to log your hours and make Max happy.</h2>
        <input value={firstName} onChange={handleFirstName} type="name" autoComplete="name" placeholder="first name" className="auth-input" />           
        <input value={lastName} onChange={handleLastName} type="name" autoComplete="name" placeholder="last name" className="auth-input" />    
        <input value={email} onChange={handleEmail} type="email" autoComplete="email" placeholder="email" className="auth-input" />
        <input value={pass} onChange={handlePass} type="password" autoComplete="password" placeholder="password" className="auth-input" />
        <button onClick={signup} type="button" className="auth-button">Sign Up</button>
      </form>

      <br></br>

      <form className="l-s-container">
        <h2 className="subtitle">Have an account? <a href="login">Log in</a></h2>
     </form>

     <br></br>

      </div>





  )
}
