import React, { useState } from "react"



function SignUp(){
    const [signUp,setSignUP]=useState[{name:"",email:"",password:""}]
    const userData=(e)=>{
        setSignUP({...signUp,[e.target.name]:[e.target.value]})
        console.log(userData);
        
    }
    return(
        <div>
            <form>
            <input type="name" placeholder="Name" onChange={userData}/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>SignUp</button>
            </form>

        </div>
    )
}
export default SignUp