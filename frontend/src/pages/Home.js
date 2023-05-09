import React from 'react';
import {useNavigate} from 'react-router-dom'
// import logo from '../Images/logo-new.png'
// import icon from '../Images/butterfly (4).png'
import './styles.css'
const Home = () => {
    const navigate=useNavigate()

    const reg=()=>{
        navigate('/signup');
    }
    const login=()=>{
        navigate('/login');
    }
    return (<>
    <div >

        <center>
        <div className='sub-box'>
            <h2>Join Us, Create Your Account!</h2>
            <button className='glow-on-hover' onClick={reg} >SignUp</button><br/>
            <button className='glow-on-hover' onClick={login}>Login</button><br/>
        </div></center>

    </div>
    </>
    );
}

export default Home;