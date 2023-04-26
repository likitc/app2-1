import React from 'react'
import {Navbar,Header,Footer} from './func-components'
import Calendar from './class-components'
import MsgBox from './func-props'

function App() {
 
 return (
  <>
    <Navbar />
    <Header />
    <p><Calendar /></p>
    <Footer />
  </>

 ) 

 /*return(
     <MsgBox 
        text="Useing props in function component"
        color="red"
        bgColor="#ccc"
        fontSize="16pt"
        border="dotted 1px black"
      />
 )*/
}

export default App;
