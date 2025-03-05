// import { useState } from "react"
// function Login(){
//     const [login,setLogin]=useState({email:"",password:""})
//     const  handleLogin=(x)=>{
//         setLogin({...login,[x.target.name]:x.target.value})
//     }
//     const loginData=login
//     const LoginSubmit=(g)=>{
//         g.preventDefault()
//         const loginUser=JSON.parse(localStorage.getItem("userDetails")) || []
//         const userFound=loginUser.find(x=>x.email===loginData.email && x.password===loginData.password)
//         if (userFound){
//             alert("user found")
//         }
//         else{
//             alert("please enter valid details")
//         }
//     }
//     return(
//         <div>
//             Login
//             <form onSubmit={LoginSubmit}>
//             <input type="email" name="email" placeholder="enter email here" onChange={handleLogin } value={login.name} />
//             <input type="password" name="password" placeholder="password here" onChange={handleLogin} valuealue={login.name}/>
//             <button>Login</button>
//             </form>

//         </div>
//     )
// }
// export default Login


import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import './login.css'

function Login(){
    const navigate=useNavigate()
    const [login,setLogin]=useState({email:"",password:""})
    const handleLogin=(x)=>{
        setLogin({...login,[x.target.name]:x.target.value})
    }
    const LoginSubmit=(e)=>{
        e.preventDefault()
        const loginUsersLS=JSON.parse(localStorage.getItem("userdetails")) || []
        const loginData=login;
        const userFound=loginUsersLS.find(x=>x.email === loginData.email && x.password === loginData.password)
        if(userFound){
            alert("credentials matched")
        }else{
            alert("Enter valid credentials")
        }
        navigate('/')
    }
    return(
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
            <form onSubmit={LoginSubmit}>
            <input type="email" name="email" placeholder="enter email here" onChange={handleLogin} value={login.name}/>
            <input type="password" name="password" placeholder="enter password here" onChange={handleLogin} value={login.name}/>
            <button>Login</button>
            </form>
            </div>   


        </div>
    )
}
export default Login

