import {useState} from 'react'
import "./clockIn.css"

export default function Clockin() {
  const[project, setProject] = useState("")
  const[note, setNote] = useState("")


  const handleProject = (event: any) =>{
    console.log("event", event.target.value)
    setProject(event.target.value)
  }

  const handleNote = (e: any) => {
    console.log("event", e.target.value)
    setNote(e.target.value)
  }

  return (
    <section className="page bottom">
      <form className="top">
       <h1 className="title">Soon To Be Named App</h1>
      </form>   

      <form className="top-nav">
        <nav><a className="active" href="clock">Clock In</a></nav>
        <nav><a href="timeSheet">Time Sheet</a></nav>
        <nav><a href="admin">Admin</a></nav>
        <span><nav style={{float:'right'}}><a className="color" href="login">Logout</a></nav></span>
      </form>

      <form className="logo-container">
        <img src="https://images-na.ssl-images-amazon.com/images/I/513j5jtAj3L._AC_SL1000_.jpg"  
          alt="Logo" style={{ width:'100px', height:'100px'}}></img>
      </form>

      <form className="project-container">
        <label htmlFor="project">Project</label>
        <br></br> <br></br>
        <input value={project} onChange={handleProject} type="project" autoComplete="project" placeholder="Project..." className="proj-input" />
        <br></br> <br></br>
      </form> 

      <form className="project-container">
        <label htmlFor="note">Note</label>
        <br></br> <br></br>
        <textarea onChange={handleNote} autoComplete="note" className="proj-input" style={{ height:'7rem'}}>  </textarea>
      </form>

      <form className="time-container">
        <label>Start Time:</label>
        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required className="clock-input"></input>
        <input type="date" name="birthday" className="clock-input"></input>
      </form>

      <form className="time-container">
        <label>End Time:</label>
        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required className="clock-input"></input>
        <input type="date" name="birthday" className="clock-input"></input>
      </form>

      <form className="total-time-container">
        <h2>Total Hours Worked: </h2>
      </form>
   </section>
  )
}