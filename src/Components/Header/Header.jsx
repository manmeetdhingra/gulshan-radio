import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'




// import { Button, ThemeProvider, createTheme } from '@mui/material'

// const mainTheme = createTheme({
//   palette: {
//     main: '#d24a6e'
//   }
// })




export default function Header() {

  const navigate = useNavigate()

  return (
    <div style={{display: "flex", justifyContent: "space-between"}} className='header-container'>
        <div><img src='/GulshanRadio-UPDATE3-03(1).png'/></div>
        <div className='button-container'>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/schedule")}>Schedule</button>
        <button onClick={() => navigate("/presenters")}>Presenters</button>
        <button onClick={() => navigate("/gallery")}>Gallery</button>
        <button onClick={() => navigate("/about")}>About Us</button>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
        
        <a href="public/GR-MediaPack.pdf" download={"GR-MediaPack.pdf"}> <button>Media Pack</button></a>
        </div>
    </div>
  )
}


{/* <ThemeProvider theme={mainTheme}>
        <Button sx={{height: "40px", padding:"0px 20px 0px 20px", alignSelf: "center"}} variant='contained'>Home</Button>
        <Button sx={{height: "40px", padding:"0px 30px 0px 30px", alignSelf: "center"}} variant='contained'>Schedule</Button>
        <Button sx={{height: "40px", padding:"0px 30px 0px 30px", alignSelf: "center"}} variant='contained'>Presenters</Button>
        <Button sx={{height: "40px", padding:"0px 30px 0px 30px", alignSelf: "center"}} variant='contained'>Gallery</Button>
        <Button sx={{height: "40px", padding:"0px 30px 0px 30px", alignSelf: "center"}} variant='contained'>About Us</Button>
        <Button sx={{height: "40px", padding:"0px 30px 0px 30px", alignSelf: "center"}} variant='contained'>Contact Us</Button>
        </ThemeProvider> */}