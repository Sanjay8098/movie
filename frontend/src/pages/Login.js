import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import './styles.css'
const Login = () => {
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [token,setToken]=useState()
const navigate=useNavigate()

React.useEffect(()=>{
  setToken( localStorage.getItem('Token'))
  console.log(token);
})


async function log(e){
    e.preventDefault()
    try {
      await axios.post("http://localhost:3003/api/login",{
        email,password
      }).then(response=>{
        localStorage.setItem('Token',response.data)
        // console.log(response.data);
        toast.success(`Hello you have successfully loged in`,{
        position:"top-right"
        })
        navigate('/home')
      })
    } catch (error) {
      toast.error(`Password or Email didn't match`,{
        position:"top-left"
      })
      console.log(error.message);
    }
    setEmail("")
    setPassword("")
}
    return (
        <>
        <div className='secondbox'>
          <center>
        <div className='form' >
          <form onSubmit={log}>

        <label>Email</label>
        <input type="text" placeholder='enter ur email' required={true} className='form__input' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="text" placeholder='enter ur password' required={true} className='form__input' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/>
				<button className="glow-on-hover" type="submit" >Submit</button>
        <br/>
        <br/>
        </form>
        {
          token && <button className="glow-on-hover" onClick={()=>{
            localStorage.clear()
            navigate('/')
            toast.success("Loged out",{
              position:"top-left"
            })
          }}>Logout</button>
        }

      </div> 
      </center>
      {/* <ToastContainer />   */}
      </div>
        </>
    
    );
}

export default Login;