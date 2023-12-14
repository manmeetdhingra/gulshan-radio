import React from 'react'
import "./Header.css"
// import { Button, ThemeProvider, createTheme } from '@mui/material'

// const mainTheme = createTheme({
//   palette: {
//     main: '#d24a6e'
//   }
// })


export default function Header() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}} className='header-container'>
        <div><img src='/GulshanRadio-UPDATE3-03(1).png'/></div>
        <div className='button-container'>
        <button>Home</button>
        <button>Schedule</button>
        <button>Presenters</button>
        <button>Gallery</button>
        <button>About Us</button>
        <button>Contact Us</button></div>
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