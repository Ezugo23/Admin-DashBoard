import React from 'react'
import '../Style/OrderHistory.css'
import SideNav from './SideNav'
import invoice from '../Asset/EditUsers/Shape (4).jpg'

const OrderHistory = () => {

  return (
    <>
   <div className="container">
      <h5 className='my-5'>All Users / Order History</h5>
      <div className='flexer mb-5'>
      <SideNav/>
      <div>
       <div className="whitebg">
       <h4>All users / Order History</h4>
          <hr />
       <form className='w-100 d-flex justify-content-between'>
           <div>
           <label>Show</label>
            <select name="" id="" className='select'>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <label>entries</label>
           </div>
            <div>
              <label htmlFor="">Search:</label>
              <input type="text" className='ms-1 p-2 border border-1 border-black'/>
            </div>
        </form>

        <table className='ttttt'>
        <tr className='text-center'> 
              <th>ID</th>
              <th>DATE</th>
              <th>SELLER</th>
              <th>INVOICE</th>
              <th>PICKUP LOCATION</th>
              <th>DROP OFF LOCATION</th>
              <th>AMOUNT</th>
            </tr>

            <tr className=''>
              <td>01</td>
             <td>17.8.2023-7:29am</td>
              <td>Cafe "Belvedere"</td>
              <td><img src={invoice} alt="" className='w-25'/></td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>$79.95</td>
            </tr>
            <tr className=''>
              <td>02</td>
             <td>17.8.2023-7:29am</td>
              <td>Cafe "Belvedere"</td>
              <td><img src={invoice} alt="" className='w-25'/></td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>$79.95</td>
            </tr>
            <tr className=''>
              <td>03</td>
             <td>17.8.2023-7:29am</td>
              <td>Cafe "Belvedere"</td>
              <td><img src={invoice} alt="" className='w-25'/></td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>02111, 50, G. Washington ave. app 5, Boston, USA</td>
              <td>$79.95</td>
            </tr>
        </table>

        <div className='d-flex justify-content-between mt-5'>
        <p>Showing 1 to 3 of 3 entires</p>
        <p>1</p>
        </div>
       </div>
        
      </div>
        

        

      </div>

      </div>
    </>
  )
}

export default OrderHistory;