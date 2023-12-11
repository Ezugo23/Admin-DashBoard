import Form from 'react-bootstrap/Form';
import React from 'react'
export default function Password() {
  return(
    <>
      <div className='bg-white my-20 mx-300'style={{ width: '900px', height: '87%', right: '20', border: '1px groove'}}>
        <h3 className='font-bold mt-3 text-left mx-3'>Change Password</h3>
      
     <div className='d-lg-flex mx-10'>
     <Form className='mr-20 mt-10'>
      <div className='row align-items-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Old Password</Form.Label>
        <input
                  type="password"
                  name="old-password"
                  id="old-password"
                  placeholder="Name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Password</Form.Label>
        <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  placeholder="Phone Number"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Email Address"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <div className='mx-30 col-lg-2'>
      <button
          type="submit"
          className="block mx-auto m-2 mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-20 rounded"
        >
           Change
        </button>
        </div>

   </div>
      
    </Form>
     </div>
     </div>
    </>
  )
}