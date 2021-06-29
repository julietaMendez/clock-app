import {useState} from 'react'
import "./clockIn.css"


export default function Admin() {

  return (
    <section className="page bottom">
      <form className="top">
       <h1 className="title">Soon To Be Named App</h1>
      </form>   

      <form className="top-nav">
        <nav><a href="clock">Clock In</a></nav>
        <nav><a  href="clockin">Time Sheet</a></nav>
        <nav><a className="active" href="admin">Admin</a></nav>
        <span><nav style={{float:'right'}}><a className="color" href="login">Logout</a></nav></span>
      </form>
   </section>
  )
}