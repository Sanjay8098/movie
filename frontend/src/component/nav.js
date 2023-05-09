import {useFormik} from 'formik'
// import { useState } from 'react';
import axios from 'axios'

export default function Register(){
    // const [regno,setRegno]=useState('')
    // const [name,setName]=useState('')
    // const [email,setEmail]=useState('')
    // const [pwd,setPwd]=useState('')
    // const [course,setCourse]=useState('')
    // const [batch,setBatch]=useState('')
    
    async function postreg(){
        axios.post('http://localhost:3002/api/student/register',{
            register_no:formik.values.register_no,
            name:formik.values.name,
            email:formik.values.email,
            password:formik.values.password,
            course:formik.values.course,
            batch:formik.values.batch
        }).then(res=>{console.log(res.data)})
    }    
    const formik = useFormik({
        initialValues: {
        register_no:"",
        name:"",
        email: "",
        password:"",
        course:"",
        batch:""
        },
        onSubmit: (values) => {
            // setRegno(values.register_no)
            // setName(values.name)
            // setEmail(values.email)
            // setPwd(values.password)
            // setCourse(values.course)
            // setBatch(values.batch)
       //  console.log(regno+' '+name+' '+email+" "+pwd+''+course+''+batch);
         console.log(values);
        postreg()
        },
        validate: (values) => {
        let errors = {};
        if (!values.email) {
        errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        } 
        if(!values.password) errors.password="Required";
        return errors;
        }
        });
        return (
            <>
            <h1>Welcome to Fine Management System</h1>
            <h3>Register</h3>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor='register_no'>Register Number</label>
        <input id='register_no' name='register_no' type='text' onChange={formik.handleChange} value={formik.values.register_no}></input>
        <lable htmlFor='name'>Name</lable>
        <input id='name' name='name' type='text' onChange={formik.handleChange} value={formik.values.name}></input>
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" onChange={formik.handleChange}
        value={formik.values.email} />
        {formik.errors.email ? <div style={{ color: "red" }} >{formik.errors.email}</div> : 
        null}
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"
        onChange={formik.handleChange} value={formik.values.password} /><br></br>
        {formik.errors.password ? <div style={{ color: "red" }} 
        >{formik.errors.password}</div> : null}
        <label htmlFor='course'>Course</label>
        <input id='course' name='course' type='course' onChange={formik.handleChange} value={formik.values.course}></input>
        <label htmlFor='batch'>Batch</label>
        <input id='batch' name='batch' type='batch' onChange={formik.handleChange} value={formik.values.batch}></input>
        <button type="submit">Submit</button>
        </form>
        </>
        );
        
}