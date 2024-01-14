import React from 'react'
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom'
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import '../App.css'

const Types = () => {
    const navigate = useNavigate()
    const myObj = [
        {
            icons: require("../Asset/Home Chef.png"),
            name: "Home Chef",
            small: "ddd",
            current: 1,
            active: "active",
        },
        {
            icons: require("../Asset/Home Chef.png"),
            name: "Home Chef",
            current: 1,
            small: "ddd",
            active: "active",
        },
        {
            icons: require("../Asset/Home Chef.png"),
            name: "Home Chef",
            small: "ddd",
            current: 1,
            active: "active",
        },

    ]
    return (
        <div className='container p-3 mt-20 text-center shadow-sm ms-3 bg-white rounded-2' style={{fontSize: '10px'}} >
            <h5 className='text-start '>Food types</h5>

            <Table striped bordered hover>
                <thead className=''>
                    <tr className='panda' >
                        <th className='py-3'>#</th>
                        <th className='py-3'>ICONS</th>
                        <th className='text-start ps-5 py-3'>NAME</th>
                        <th className='py-3'>CURRENT NUMBER</th>
                        <th className='py-3'>STATUS</th>
                        <th className='py-3'>ACTION</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myObj.map((item, i) => (

                            <tr className='yy'>
                                <td className='pt-3'>0{i+1}</td>
                                <td className='pt-3'><img src={item.icons} style={{width: '30px'}} alt="" /></td>
                                <td className='pt-3 d-flex flex-column text-start ps-5'><span>{item.name}</span><span>{item.small}</span></td>
                                <td className='pt-3'>{item.current}</td>
                                <td className='pt-2'><button className='btn border rounded-pill px-4'>{item.active}</button></td>
                                <td className='pt-3'>
                                    <span><CiEdit /> Edit</span>
                                    <span className='ps-3 '><RiDeleteBin5Line /> Delete</span>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            
           <div className='text-start'>
          <button onClick={()=>{
            navigate('/Settings/Edit')
          }} className='btn btn-primary yoyo'><GoPlus /> Add a New Type</button>
           </div>

        </div>
    )
}

export default Types