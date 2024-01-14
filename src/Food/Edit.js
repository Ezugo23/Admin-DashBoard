import React from 'react'
//import Section2 from './Section2'
//import Section from './Section'
import logo from '../Asset/image.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Edit = () => {
  return (
    <div className='d-flex '>
       <div>
        
       </div>
      <div>

        <div className='d-flex bg-white mt-20 dd justify-content-center'>
          <div className=''>
          <h6 className='text-start ms-2  mt-2 '>Add/Edit Food type</h6>
            <div className='d-grid idan '>
               <img src={logo} className='yo' alt="" />
               <button className='btn btn-danger'>Change icon</button>
            </div>
          </div>
          <div className='mt-5'>
           
            <Form>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Current Number of Types</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>1</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Dessert</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <div className='d-flex align-items-center'>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Place Amount" />
                </Form.Group>
                <Form.Group className="mb-5 ps-5" controlId="formGridAddress1">
                  <Form.Label className=''>Caption</Form.Label>
                  <Form.Control placeholder="Caption title here" />
                </Form.Group>

              </div>
              <Row className="mb-3">


                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>inactive</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

              </Row>
              <button className='btn btn-muted'>cancel</button> <button className='btn btn-danger lo'>submit</button>
            </Form>
          </div>
        </div>




      </div>

    </div>
  )
}

export default Edit