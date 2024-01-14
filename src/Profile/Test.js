import Form from 'react-bootstrap/Form';
import '../App.css'
export default function Account(props) {
  return(
    <>
      <div className='bg-white flex-start ml-10 mt-10'style={{ width: '820px', height: '95%', right: '20', border: '1px groove'}}>
         <h3 className='font-bold mt-3 text-left mx-3'>Company Information</h3>
      
     <div className='d-lg-flex mx-10'>
     <Form className='mr-20 mt-10' onSubmit={(e) => e.preventDefault()}>
      <div className='row align-items-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.company || ''}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.email}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <input
                  type="text"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Number"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.phoneNumber}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <textarea
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  autoComplete="family-name"
                  rows="3" 
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.city}
                />
      </Form.Group>

  
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.address} 
                />
      </Form.Group>
      <Form.Group className="mb-3 ml-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.state}
                />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Postal Zip COde</Form.Label>
        <input
                  type="text"
                  name="postal"
                  id="code"
                  placeholder="Postal Zip Code"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.postal}
                />
      </Form.Group>
      <div className='mx-30 col-lg-2'>
      <button
          type="submit"
          className="block mx-auto m-2 mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-20 rounded"
        >
           Submit
        </button>
        </div>

   </div>
      
    </Form>
     </div>
     </div>
    </>
  )
}
