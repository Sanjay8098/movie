import jwt from 'jsonwebtoken'
import User from '../module/User.js'
import hash from '../middleware/hashpassword.js';
// import { hash } from 'bcryptjs';
const register=async(req,res)=>{
    // console.log(req.body);
    try {
        // console.log('hi');
        var name=req.body.name;
        var email=req.body.email;
        var password=req.body.password;
        const Xuser=await User.findOne({email:email})
        if (Xuser) {
            res.status(401).send("Email is already taken")
            console.log("user exits");

        } else {
            let hashpassword=await hash.hashpassword(req.body.password)
            const newuser=new User({
                name:name,
                email:email,
                password:hashpassword
            })
        //    async function save(){
                const result=await newuser.save();
                console.log(`Hello ${name} you have sucessfuly registered`);
                res.status(200).send(`Hello ${name} you have sucessfuly registered. Your account details are ${result}`)

        //    }
        //    save()
        } 
    } catch (error) {
        // console.log(error);
        res.status(401).send(error)
    }
}

const sigin=async(req,res)=>{
    try {
        // console.log('hi');
        let email=req.body.email;
        let password=req.body.password;
        const user=await User.findOne({email:email})
        if (user) {
            console.log(user);
            const id=user._id
            const auth=jwt.sign({id},"asdfghjkl")
            // jwt.sign({id},"asdfghjkl")
            console.log(auth);
            res.send(auth)
        } else {
            res.status(400).send(`No user found in id ${email}`)
        }
    } catch (error) {
        console.log(error.message);
    }
}
export default {register, sigin}