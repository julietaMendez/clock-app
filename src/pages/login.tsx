import {useState} from 'react'
import {useUsers} from '../state/user'
import "./auth.css"

export default function Login() {
  const[email, setEmail] = useState("")
  const[pass, setPass] = useState("")
  const user = useUsers()

  const handleEmail = (event: any) =>{
    console.log("event", event.target.value)
    setEmail(event.target.value)
  }

  const handlePass = (e: any) => {
    console.log("event", e.target.value)
    setPass(e.target.value)
  }

  const login = async () => {
    console.log(email, pass)
    //sending to server

    const result = await fetch("https://34.219.113.221/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass
      })
    })
  }

  return (
    <div className="page bottom">
      <br></br>
      <form className="login-container">
        <h1 className="title">Soon To Be Named App</h1>
        <input value={email} onChange={handleEmail} type="email" autoComplete="email" placeholder="email" className="auth-input" />
        <input value={pass} onChange={handlePass} type="password" autoComplete="password" placeholder="password" className="auth-input" />
        <button onClick={login} type="button" className="auth-button">Login</button>
        <h2 className="subtitle">Forgot password? <a href="login">Set up eventually</a></h2>
      </form>

      <br></br>

      <form className="l-s-container">
        <h3 className="subtitle">Don't have an account? <a href="signup">Sign up</a></h3>
     </form>
    </div>
  )
}