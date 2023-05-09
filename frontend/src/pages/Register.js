import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {useState} from 'react'
import './styles.css'
const Signin = () => {
    const [ name, setName ] = useState("")
	  const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate=useNavigate()
  async function reg(e){
    e.preventDefault()
    try {
      console.log({name,email,password});
      await axios.post("http://localhost:3003/api/reg",{
        name,email,password
      }).then(response=>{
        // alert(`Hello ${name} you have sucessfuly registered. Your account details are ${name} ${email}`)
        toast.success(`Hello ${name} you have sucessfuly registered. Your account details are ${name} ${email}`,{
          position:"top-left"
        })
        navigate('/login')
      }
      )

    } catch (error) {
      toast.error("user already exist or invalid user",{
        position:"top-left"
      })
      console.log(error.message);
    }
        setName("")
    setEmail("")
    setPassword("");
  }
    return (
        <>
        <div className="secondbox">
          <center>
        <div className='form' >
        <form  onSubmit={reg}>
        <label>Name</label>
        <input type="text" placeholder='enter ur name' className='form__input' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="text" placeholder='enter ur email' className='form__input' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="text" placeholder='enter ur password' className='form__input' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <br/>
				<button type="submit" className="glow-on-hover">Submit</button>
        </form>
      </div>  
      </center>
      </div>
      <ToastContainer />
      </>
    );
}

export default Signin;