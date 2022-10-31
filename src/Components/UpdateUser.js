import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const UpdateUser = () => {
const update= useLoaderData()
const [user,setUser]=useState(update)

    const handleupdate=(event)=>{
     event.preventDefault()
     console.log(user)
     fetch(`http://localhost:5000/users/${update._id}`,{
      method:'PUT',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if (data.modifiedCount >0) {
        alert('user updated')
      }
     })
  
    }
const handleInputChange=(event)=>{
 const value= event.target.value;
 const input= event.target.name;
 const newUser={...user}
 newUser[input]= value;
 setUser(newUser)
  console.log(input,value)
}

  return (
    <div>
      <h2>this is a updated{update.name}</h2>
      <form onSubmit={handleupdate}>
                <input onChange={handleInputChange} defaultValue={update.name} type="text" name='name' placeholder='Name' required />
                <br/>
                <input onChange={handleInputChange} defaultValue={update.address} type="text" name='address'  placeholder='Address' required/>
                <br/>
                <input onChange={handleInputChange} defaultValue={update.email}  type="email" name='email' placeholder='Email' required />
                <br/>
               <button type='submit'>Create User</button>
    </form>
    </div>
  );
};

export default UpdateUser;