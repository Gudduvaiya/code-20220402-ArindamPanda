import React from 'react'

function Explore() {
  const body = {
    height: "630px",
    // backgroundImage:
    //   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80')",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "0px -130px",
    display: "flex",
    color: "blcak",
    flexDirection:"column",
    alignItems:"center",

  };
  const firstsec={
    display:"flex",
    width:"100%",
    flexDirection:"column",
    // marginTop:"5vh",
    marginLeft:"12vw"
  }
  const secondsec={
    display:"flex",
    width:"70%",
    marginTop:"5vh",
    // marginLeft:"12vw",
    justifyContent:"space-between",
  }
  const image={
    height:"35vh",
    width:"26vw",
    borderRadius:"20px",
    position:"absolute"
  }
  const imageinner={
    border:"9px double white",
    backgroundColor:"transparent",
    borderRadius:"20px",
    alignItems:"center",
    padding:"13px",
    display:"flex",
    // flexDirection:"column",
    // width:"50%"
    marginTop:"25vh",
    marginLeft:"8px",
    color:"white",
    height:"10vh",
    position: "relative",
    fontWeight:"bold"
  }
  return (
    <div style={body}>
        <div style={firstsec}>
        <h1 style={{fontSize: "10vh",width:"60%",lineHeight:"77px",marginBottom:"0px"}}>Explore</h1>
        <p style={{fontSize:"20px",width:"22%"}}>From one-guest rooms to penthouses with pools and gardens</p>
        </div>

        {/* 2nd sec  */}
        <div style={secondsec}>
        <div style={{position:"relative"}}>

          <img style={image} src='https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
          <div style={imageinner}>
            <div> 
              <p>Room with one king size bed</p>
              <button style={{borderRadius:"5px",fontSize:"25px",marginRight:"10px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>38$</button>
              <button style={{borderRadius:"5px",fontSize:"25px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>28M</button>
            </div>
            <button style={{borderRadius:"5px",fontSize:"35px",marginLeft:"15px",marginTop:"25px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>Book!</button>
          </div>
        </div>
        <div style={{position:"relative"}}>
        <img style={image} src='https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
          <div style={imageinner}>
            <div  style={{marginTop:"0"}}> 
              <p>Penthouse for 8 persons</p>
              <button style={{borderRadius:"5px",fontSize:"25px",marginRight:"10px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>2039$</button>
              <button style={{borderRadius:"5px",fontSize:"25px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>438M</button>
            </div>
            <button style={{borderRadius:"5px",fontSize:"35px",marginLeft:"15px",marginTop:"25px",backgroundColor:"#ffb264e6",cursor:"pointer",color:"white"}}>Book!</button>
          </div>
        </div>
         
        </div>
    </div>
  )
}

export default Explore