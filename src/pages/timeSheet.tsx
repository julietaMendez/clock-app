import {useState} from 'react'
import "./clockIn.css"


export default function TimeSheet() {

  return (
    <section className="page bottom">
      <form className="top">
       <h1 className="title">Soon To Be Named App</h1>
      </form>   

      <form className="top-nav">
        <nav><a href="clock">Clock In</a></nav>
        <nav><a className="active" href="clockin">Time Sheet</a></nav>
        <nav><a href="admin">Admin</a></nav>
        <span><nav style={{float:'right'}}><a className="color" href="login">Logout</a></nav></span>
      </form>

      <br></br>
      <form className="project-container">
        <label>Start Date:</label>
        <input type="date" name="birthday" className="project-container"></input>
      </form>

      <form className="project-container">
        <label>End Date:</label>
        <input type="date" name="birthday" className="project-container"></input>
      </form>

   </section>
  )
}