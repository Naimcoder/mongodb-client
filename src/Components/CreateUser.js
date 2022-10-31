import React, { useState } from 'react';

const CreateUser = () => {
const [user,setUser]=useState({})
    const handleSubmit=(event)=>{
     event.preventDefault()
     console.log(user)
     fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if (data.acknowledged) {
            alert('create user add successfully')
            event.target.reset();
        }
     })
    }
const handleInputBlur=(event)=>{
 const value= event.target.value;
 const input= event.target.name;
 const newUser={...user}
 newUser[input]= value;
 setUser(newUser)
  console.log(input,value)
}
    return (
        <div>
            <h2>This is updated user</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputBlur} type="text" name='name' placeholder='Name' required />
                <br/>
                <input onChange={handleInputBlur} type="text" name='address'  placeholder='Address' required/>
                <br/>
                <input onChange={handleInputBlur}  type="email" name='email' placeholder='Email' required />
                <br/>
               <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default CreateUser; 