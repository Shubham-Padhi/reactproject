import React from 'react'
import "./Style.css";
export default function Titel() {
  let page ={
    color:'white',
    fontSize: 20,
    fontWeight:"bold",
    textAlign:"center",
    background:"black",
    


  }
  return (
    
       <>
      
<div className="container">
 
   <h1 className='head' style={page}>Chiku@</h1> 
   <div className='main'>
    <div className="row justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">Login</h5>
            <htmlForm>
              <div className="mb-3">
                <label htmlFor="username" className="htmlForm-label">Username:</label>
                <input type="text" className="htmlForm-control" id="username" placeholder="Enter your username"/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="htmlForm-label">Password:</label>
                <input type="password" className="htmlForm-control" id="password" placeholder="Enter your password"/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </htmlForm>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>       
 </>

  )
}
