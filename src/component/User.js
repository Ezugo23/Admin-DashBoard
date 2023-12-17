
import Form from 'react-bootstrap/Form';
import React from 'react'
import '../App.css'
export default function User() {
  return(
    <>
      <div className='bg-white my-20 mx-50'style={{ width: '900px', height: '87%', right: '20', border: '1px groove'}}>
        <h3 className='font-bold mt-3 text-center'>Add/Edit Personal Information</h3>
      
     <div className='d-lg-flex'>
      <div className='ml-10 mr-20 mt-20 mb-auto'>
        
      <img
              className=" imgProfileStyle  h-40 mx-auto mb-2 flex-lg items-center justify-center"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <div>
        <button
          type="submit"
          className="block mx-auto m-2 mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-20 rounded"
        >
           Upload
        </button>
        </div>
      </div>
     <Form className='mr-20 mt-10'>
<div className='row align-items-center'>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='full-name'
              id='name'
              placeholder='Name'
              autoComplete='family-name'
              className='text'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>Phone-Number</label>
            <input
              type='text'
              name='phone-name'
              id='phone'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>Email-Address</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Email'
              autoComplete='family-name'
              className='text'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>Address</label>
            <textarea
              type='text'
              name='address'
              id='address'
              placeholder='address'
              autoComplete='family-name'
              className='text'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='City'
              id='city'
              placeholder='City'
              autoComplete='family-name'
              className='text'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='city'>State</label>
            <input
              type='text'
              name='state'
              id='State'
              placeholder='State'
              autoComplete='family-name'
              className='text'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='city'>Postal Zip Code</label>
            <input
              type='text'
              name='postal'
              id='Postal'
              placeholder='Postal'
              autoComplete='family-name'
              className='text'
            />
          </div>
          <button type='submit' className='custom-button'>
        Profile
      </button>
        </div>
      </div>
      
      
    </Form>
     </div>
     </div>
    </>
  )
}
