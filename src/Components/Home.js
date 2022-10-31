import React, { useState } from 'react';
import { Link, useLoaderData, } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData()
    const [displayUser,setDislayUser]=useState(user)
    const handleDeletd=(users)=>{
    const agree= window.confirm(`Are you sure want to deleted ${users.name}`)
       if (agree) {
            console.log(`delete with id:${users._id}`)
            fetch(`http://localhost:5000/users/${users._id}`,{
               method:"DELETE",
               
            })
            .then(res=>res.json())
            .then(data=>{ 
                if (data.deletedCount > 0) {
                    alert('user deleted successfully')
                    const remmaingUser= displayUser.filter(usr =>usr._id !== users._id)
                    setDislayUser(remmaingUser)
                }
            
            })
       }
    }
    return (
        <div>
            {/* <h2>this is home{displayUser.length}</h2> */}
            <div>
                  {displayUser.map(users=><p key={users._id}>{users.name}{users.email}
                  <Link to={`/updateuser/${users._id}`}>
                  <button>updated</button>
                  </Link>
                  <button onClick={()=>handleDeletd(users)}>X</button>
                  </p>)}
            </div>
            
        </div>
    );
};

export default Home;