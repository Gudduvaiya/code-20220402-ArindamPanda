import React from 'react'

function Footer() {
    const navbar = {
        display: "flex",
        width: "100%",
        height: "23vh",
        padding: "10px",
        margin: "2px 10px 0px 10px",
      };
      const navbarOptions = {
        display: "flex",
        width: "100%",
        marginLeft: "43%",
        marginRight: "80px",
        justifyContent: "space-between",
        fontSize: "20px",
        alignItems: "center",
        cursor:"pointer"
      };
  return (
    <div style={navbar}>
        <div style={{ fontSize: "20px",marginLeft:"10px" ,width:"67%"}}>
          <h1>your logo</h1>
          <p style={{ fontSize: "15px",margin:"0%"}}>&copy; 2021 Vamstar<br/>All rights reserved</p>
        </div>
        <div style={navbarOptions}>
          <p>Explore</p>
          <p>About Us</p>
          <p>City </p>
          <div
            style={{ 
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              cursor: "pointer",
              height: "43px",
              width: "83px",
            }}
          >
            call
          </div>
        </div>
      </div>
  )
}

export default Footer