
// import dele from '../assets/delete-bin-line.jpg'
import { Icon } from '@iconify/react';
import deleteFill from '@iconify/icons-mingcute/delete-fill';
import edit from '../Asset/Edit (2).jpg'
// import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import '../Style/AllUsersEditAddress.css'
import { Link } from 'react-router-dom';

const AllUsersEditAddress = () => {
  return (
    <>
    <div className='container'>
        <h5 className='my-5'>All Users / Edit Address</h5>
        <div className='tableflex mb-5'>
      <SideNav/>
        <div className='w-100'>
            <div className='tab'>
                <h4>Address List</h4>
                <hr />
                <table className='tt w-100'>
                    <tr>
                        <th>#</th>
                        <th>POSTAL CODE</th>
                        <th>ADDRESS</th>
                        <th>CITY</th>
                        <th>STATE </th>
                        <th>COUNTRY</th>
                        <th>STATUS </th>
                        <th>ACTIVE</th>
                    </tr>
                    
                    <tr className='tr'>
                        <td className='td'>01</td>
                        <td className='td'>02111</td>
                        <td className='td'>50, Charter str.app 5</td>
                        <td className='td'>Boston</td>
                        <td className='td'>MA</td>
                        <td className='td'>United State</td>
                        <td className='tdr'><input type="radio" name='btn'/> <label htmlFor="">Primary</label></td>
                        <td className='td'>
                            <button className='btn'> <img src={edit} alt="" className='w-25'/> Edit</button>
                            <button className='btn'><img src={<Icon icon={deleteFill} />} alt="" className='w-25'/>Delete</button>
                        </td>
                    </tr>

                    <tr className='tr'>
                        <td className='td'>01</td>
                        <td className='td'>02111</td>
                        <td className='td'>50, Charter str.app 5</td>
                        <td className='td'>Boston</td>
                        <td className='td'>MA</td>
                        <td className='td'>United State</td>
                        <td className='tdr'><input type="radio" name='btn'/> <label htmlFor="">Primary</label></td>
                        <td className='td'>
                            <button className='btn'> <img src={edit} alt="" className='w-25'/> Edit</button>
                            <button className='btn'><img src={<Icon icon={deleteFill} />} alt="" className='w-25'/>Delete</button>
                        </td>
                    </tr>

                    <tr className='tr'>
                        <td className='td'>01</td>
                        <td className='td'>02111</td>
                        <td className='td'>50, Charter str.app 5</td>
                        <td className='td'>Boston</td>
                        <td className='td'>MA</td>
                        <td className='td'>United State</td>
                        <td className='tdr'><input type="radio" name='btn'/> <label htmlFor="">Primary</label></td>
                        <td className='td'>
                            <button className='btn'> <img src={edit} alt="" className='w-25'/> Edit</button>
                            <button className='btn'><img src={<Icon icon={deleteFill} />} alt="" className='w-25'/>Delete</button>
                        </td>
                    </tr>

                    

                   
                </table>
                <Link to='/AddAddress'><button className='top-btn my-3'>
              <p className='d-flex align-items-center'>+</p>
              <span className='span'>Add a New User</span>
            </button></Link>
            </div>
        </div>
           
        </div>

      </div>
    </>
  )
}

export default AllUsersEditAddress