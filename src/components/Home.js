import React from "react";

function Home() {
  const body = {
    height: "520px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -130px",
    display: "flex",
    color: "white",
    flexDirection:"column",
    alignItems:"center"
  };
  const navbar = {
    display: "flex",
    width: "100%",
    height: "66px",
    padding: "10px",
    margin: "2px 10px 0px 10px",
  };
  const navbarOptions = {
    display: "flex",
    width: "100%",
    marginLeft: "63%",
    marginRight: "50px",
    justifyContent: "space-between",
    fontSize: "20px",
    alignItems: "center",
  };
  const head={
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      flexDirection:"column"
  }
  const menu={
    border: "9px double",
    borderColor: "white",
    display:"flex",
    padding:"15px",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"transparent",
    borderRadius:"20px",
    width:"65%"
  }
  const menuitems={
    display:"flex",
    flexDirection:"column",
    padding:"12px",
    borderRadius:"10px",
    backgroundColor:"white",
    width:"20%",
    cursor:"pointer"
  }
  return (
    <div style={body}>
      <div style={navbar}>
        <div style={{ fontSize: "11px",marginLeft:"10px" }}>
          <h1>your logo</h1>
        </div>
        <div style={navbarOptions}>
          <p>Explore</p>
          <p>About Us</p>
          <p>City </p>
          <div
            style={{ 
              border: "2px solid white",
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

      {/* 2nd block */}
      <div style={head}>
            <h1 style={{fontSize: "12vh",width:"60%",textAlign:"center",lineHeight:"77px",marginBottom:"0px"}}>Rethink your living and renting</h1>
            <h3 style={{fontSize:"25px"}}>Make your stay painless with Us</h3>
      </div>
      {/* 3rd block  */}
      <div style={menu}>
        <div style={menuitems}>
            <p style={{color:"grey",margin:"0px"}}>City</p>   
            <h4 style={{color:"black",margin:"0"}}>Select your city</h4>   
        </div>
        <div style={menuitems}>
        <p style={{color:"grey",margin:"0px"}}>Dates</p>   
            <h4 style={{color:"black",margin:"0"}}>Select your Dates</h4>
        </div>
        <div style={menuitems}>
        <p style={{color:"grey",margin:"0px"}}>Guests</p>   
            <h4 style={{color:"black",margin:"0"}}>Add your Guests</h4>
        </div>
        <div
            style={{
              // border: "2px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              cursor: "pointer",
              height: "65px",
              // width: "83px",
          backgroundColor:"#ffb264e6",
          width:"20%",
          fontWeight:"bold"
            }}
          >
          <h2>
            Search
          </h2>
          </div>
      </div>

    </div>
  );
}

export default Home;
