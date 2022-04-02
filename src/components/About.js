import React from 'react'

function About() {
  const body = {
    height: "170vh",
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
    width:"85%",
    height:"inherit",
    backgroundColor:"white",
    // marginTop:"30px",
    padding:"20px",
    paddingLeft:"0"
  }
  const imagediv={
    display:"flex",
    flexDirection:"column",
    backgroundColor:"white",
    width:"40%",
    padding:"10px",
    // justifyContent:"space-between",
    
    // position:"relative"

  }
  const imageinner={
    border:"4px solid white",
    backgroundColor:"#ffffff8a",
    borderRadius:"20px",
    // alignItems:"center",
    padding:"13px",
    display:"flex",
    flexDirection:"column",
    width:"80%",
    marginTop:"32vh",
    marginLeft:"8px",
    color:"black",
    height:"10vh",
    position: "relative",
    fontWeight:"bold"
  }
  const imageinner2={
    border:"4px solid white",
    backgroundColor:"#ffffff8a",
    borderRadius:"20px",
    // alignItems:"center",
    padding:"13px",
    display:"flex",
    flexDirection:"column",
    width:"75%",
    marginTop:"54vh",
    marginLeft:"8px",
    color:"black",
    height:"10vh",
    position: "relative",
    fontWeight:"bold"
  }
  const imageinner3={
    border:"4px solid white",
    backgroundColor:"#ffffff8a",
    borderRadius:"20px",
    // alignItems:"center",
    padding:"13px",
    display:"flex",
    flexDirection:"column",
    width:"85%",
    marginTop:"44vh",
    marginLeft:"8px",
    color:"black",
    height:"10vh",
    position: "relative",
    fontWeight:"bold"
  }
  const imageinner4={
    border:"4px solid white",
    backgroundColor:"#ffffff8a",
    borderRadius:"20px",
    // alignItems:"center",
    padding:"13px",
    display:"flex",
    flexDirection:"column",
    width:"85%",
    marginTop:"53vh",
    marginLeft:"8px",
    color:"black",
    height:"10vh",
    position: "relative",
    fontWeight:"bold"
  }
  return (
    <div style={body}>
        <div style={firstsec}>
        <h1 style={{fontSize: "10vh",width:"60%",lineHeight:"77px",marginBottom:"0px"}}>About Us</h1>
        <p style={{fontSize:"20px",width:"22%"}}>Allow us to tell you a short story...</p>
        </div>

        {/* 2nd sec  */}
          <div style={secondsec}>
            <div style={imagediv}>
            <div  style={{position:"relative"}}>
              <img style={{position:"absolute",height:"42vh",width:"32vw",borderRadius:"20px",}} src='https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'/>
              <div style={imageinner}>
                <h2 style={{margin:"0", lineHeight:"10px"}}>Chapter I</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laboriosam.</p>
              </div>
            </div>
            <div  style={{position:"relative"}}>
              <img style={{position:"absolute",height:"60vh",width:"30vw",borderRadius:"20px",marginTop:"20px"}} src='https://images.unsplash.com/photo-1562663464-36b958487cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
              <div style={imageinner2}>
                <h2 style={{margin:"0", lineHeight:"10px"}}>Chapter III</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laboriosam.</p>
              </div>
            </div>
            </div>


            <div style={imagediv}>
            <div  style={{position:"relative"}}>
              <img style={{position:"absolute",height:"53vh",width:"34vw",borderRadius:"20px",}} src='https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
              <div style={imageinner3}>
                <h2 style={{margin:"0", lineHeight:"10px"}}>Chapter II</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laboriosam.</p>
              </div>
            </div>

            <div  style={{position:"relative"}}>
              <img style={{position:"absolute",height:"60vh",width:"34vw",borderRadius:"20px",marginTop:"20px"}} src='https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
              <div style={imageinner4}>
                <h2 style={{margin:"0", lineHeight:"10px"}}>Chapter IV</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laboriosam.</p>
              </div>
            </div>
              
            </div>
          </div>
    </div>
  )
}

export default About