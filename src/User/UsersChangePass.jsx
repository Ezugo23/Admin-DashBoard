import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import '../Style/UsersChangePass.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UsersChangePass = () => {

  const [ currentPassword, setCurrentPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')
  const {adminId} = useParams()

  const passData ={
    currentPassword,
    newPassword
  }

  const passChange = async()=>{
    try {
      const data = await axios(`https://swifdropp.onrender.com/api/v1/admin/changepassword/${adminId}`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(passData)
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(()=>{
  //   getData()
  // },[adminId])
  return (
    <div className='container'>
        <h5 className='my-5'>Edit Users</h5>
       <div className='Editpass mb-5'>
       <SideNav/>

       <div>
       <div className='pass'>
       <h4>Change Password</h4>
       <hr />
       
       <form action="">
        <label htmlFor="">Old Password</label>
        <input type="password" className='input' placeholder='**************************' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}/>
        <label htmlFor="">New Password</label>
        <input type="password" className='input' placeholder='**************************' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
        <label htmlFor="">Comfirm Password</label>
        <input type="password" className='input' placeholder='**************************'/>

        </form>
       <div><button className='tbn' onClick={passChange} >CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass