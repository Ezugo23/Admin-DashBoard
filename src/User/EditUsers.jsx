import React, { useEffect, useState } from 'react'
import '../Style/EditUsers.css'
import Editimg from '../Asset/EditUsers/Bitmap.jpg'
import signBox from '../Asset/EditUsers/Signature box.jpg'
import SideNav from './SideNav'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

 


const EditUsers = () => {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  // const [userId, setUserId] = useState(null);
  const {adminId} = useParams()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState('')
  // const [state, setState] = useState('')
  // const [zipCode, setZipCode] = useState ('')
  // const [city, setCity] = useState('')
  // const [country, setCountry] = useState('')
  // const [idNumber, setIdNumber] = useState('')

 const getData = async ()=>{
    try{
    const data = await axios.get(`https://swifdropp.onrender.com/api/v1/admin/${adminId}`)
    console.log(data.data.admin);
    setAddress(data.data.admin.address)
    // setState(data.data.admin.address.state)
    // setCity(data.data.admin.address.city)
    // setZipCode(data.data.admin.address.zipCode)
    setFirstName(data.data.admin.firstname)
    setImage(data.data.admin.image)
    setLastName(data.data.admin.lastname)
    // setIdNumber(data.data.admin)
    setEmail(data.data.admin.email)
    setPhoneNumber(data.data.admin.phoneNumber)
    }catch(error){
      console.log(error);
    }
  }
    useEffect(()=>{
      getData()
  },[adminId])

  

  const handleUpdate = async () => {

    const editbody = {
      firstname,
      lastname,
      email,
      address,
      phoneNumber
    }
    
    try {
      const data = await axios(`https://swifdropp.onrender.com/api/v1/admin/${adminId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editbody),
      });
  
      // const response = await data.json();
      console.log(data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  const profile = async () => {

    
    try {
      const data = await axios(`https://swifdropp.onrender.com/api/v1/admin/${adminId}/picture`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      // const response = await data.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete =  async (e) =>{
    e.preventDefault()
    await axios.delete(`https://swifdropp.onrender.com/api/v1/admin/${adminId}/delete`)
    .then(res => {
      navigate('/')
      console.log('succes')
    })
    .catch(err => console.log(err))

  } 
  

  

  return (
    <div className='container'>
      <h5 className='my-5'>Edit Users</h5>

      <div className='Editdiv'>
      <div className="sidediv">
          <SideNav adminId={adminId}/>
           <div className='bottomsidediv'>
           <div className='bottomsidediv2'>
           <img src={image} alt="" className='bottomsidedivimg'/>
            <button className='bottomsidedivchangephoto' onClick={profile}>Change Photo</button>
           </div>
           <hr />
            <div className="bottomsidediv3">
            <img src={signBox} alt="" className='bottomsidedivsign'/>
            <button className='bottomsidedivsavesign'>Save Signature</button>
            </div>


          </div>
        </div>        

        <div className='bg-white border rounded'>
          <div className='seconddiv'>
          <h4>Users' Profile Information</h4>
          <hr />
          <form action="">
            <label htmlFor="" className='label'>FirstName</label>
            <input type="text"  placeholder='' className='input' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
            <label htmlFor="" className='label'>LastName</label>
            <input type="text"  placeholder='' className='input' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
            <label htmlFor="" className='label'>Email</label>
            <input type="text"  placeholder='' className='input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="" className='label'>Phone Number</label>
            <input type="number"  placeholder='' className='input' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            {/* <label htmlFor="" className='label'>Country</label>
            <input type="text"  placeholder='' className='input' value={country} onChange={(e)=>setCountry(e.target.value)}/>
            <label htmlFor="" className='label'>City</label>
            <input type="text"  placeholder='' className='input' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <label htmlFor="" className='label'>State</label>
            <input type="text"  placeholder='' className='input' value={state} onChange={(e)=>setState(e.target.value)}/>
            <label htmlFor="" className='label'>Phostal Zip Code</label>
            <input type="text"  placeholder='' className='input' value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/> */}
            <label htmlFor="" className='label'>Adderss</label>
            <input type="text"  placeholder='' className='input' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {/* <label htmlFor="" className='label'>Personal ID Number</label>
            <input type="text"  placeholder='' className='input' value={idNumber} onChange={(e)=>setIdNumber(e.target.value)}/> */}
            <label htmlFor="" className='label'>Status</label>
           <select className='w-100 select'>
            <option value="Active">Active</option>
            <option value="Suspend">Suspend</option>
           </select>
          </form>
          <div className='btndiv'>
          <div>
          <button className='btn1' onClick={handleDelete}>Delete</button>
          </div>
          <div>
          <button className='btn2' onClick={()=>handleUpdate()} >Save</button>
          </div>
          </div>
          </div>
        </div>
      </div>

        </div>
  
  )
}

export default EditUsers