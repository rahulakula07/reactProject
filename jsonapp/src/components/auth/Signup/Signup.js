// import { useState } from "react"

// function SignUp(){
//     const [signUp,setSignUp]=useState({name:"",email:"",password:""})
//     const [allUsers,setAllUsers]=useState([])
//     console.log(signUp)
//     const handledata=(e)=>{
//         setSignUp({...signUp,[e.target.name]:e.target.value})
//         console.log(signUp);

//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const allUserData=[...allUsers,signUp]
//         setAllUsers(allUserData)
//         localStorage.setItem("userDetails",JSON.stringify(allUsers))
//         // localStorage.setItem("userDetails",JSON.stringify(signUp))
//         alert("suubmmited")
//         setSignUp({name:"",email:"",password:""})
//     };


//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Name Here" name="name" onChange={handledata} value={signUp.name}/>
//             <input type="email" placeholder="Email Here" name="email" onChange={handledata} value={signUp.email}/>
//             <input type="password" placeholder="password Here" name="password" onChange={handledata} value={signUp.password}/>
//             <button> signUp</button>
//             </form>
//         </div>
//     )
// }
// export default SignUp


import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import './signup.css'

function SignUp(){
    const navigate=useNavigate();
    const [signUp,setSignUp]=useState({name:"",email:"",password:""})
    console.log(signUp);
    const [allUsers,setallUsers]=useState([])
    const handleDetails=(e)=>{
        setSignUp({...signUp,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const allUsersData=[...allUsers,signUp]
        setallUsers(allUsersData)
        localStorage.setItem("userdetails",JSON.stringify(allUsersData))
        // localStorage.setItem("userdetails",JSON.stringify(signUp))
        alert("signup done successfully")
        setSignUp({name:"",email:"",password:""})
        navigate('/');
    }
    return(
        <div className='signup-container'>
            <div className='signup-box'>
                <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder="enter name here" onChange={handleDetails} value={signUp.name}/>
                <input type='email' name='email' placeholder="enter email here" onChange={handleDetails} value={signUp.email}/>
                <input type='password' name='password' placeholder="enter password here" onChange={handleDetails} value={signUp.password}/>
                <button>SignUp</button>
            </form>
            </div>
 
        </div>
    )
}
export default SignUp