import React, { useState } from 'react';
import MyInput from "../../component/input";




function send(fullname,email){
    let obj = {
        fullname,
        email
    }
    console.log(obj)
}
function Form() {
    const [fullname,setName] = useState()
    const [email,setEmail] = useState()
    console.log(fullname)
    console.log(email)
  return (
    <div>
      <div className="container p-5 text-left">
        <h1>Form</h1>
        <div className="row my-4">
          <div className="col-md-6 py-5">
            <MyInput className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
          </div>
          <div className="col-md-6 py-5">
            <MyInput className='form-control' onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email' />
          </div>
          <div className="col-md-12 py-5">
            <MyInput type='submit' onClick={()=>send(fullname,email)} className='btn btn-primary btn-block'  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
