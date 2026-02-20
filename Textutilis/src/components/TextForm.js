import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupclick=()=>{
    // console.log("Uppercase was clicked"+ Text)
    let newText= Text.toUpperCase();
    setText(newText)
  }
const handleLoclick=()=>{
  // console.log("Uppercase was clicked"+ Text)
  let newText= Text.toLowerCase();
  setText(newText)
}

const handleonchange=(event)=>{
     console.log("onchange")
     setText(event.target.value)
  }
  

  const [Text, setText] = useState("")  // React hooks can be called only inside your component function 
//  Text="NEW TEXT" // wrong way to change the state
//  setText("NEW TEXT") // correct way to change the state
  return (
    <>
    <div className="container">
 
      <h1>{props.heading} </h1>
     <div className="form-floating">
  <textarea className="form-control" value={Text} onChange={handleonchange} id="MyBox" style={{height:"270px"}}></textarea>
  
  </div>
    <button className="btn btn-success my-3 mx-2" onClick={handleupclick} >Convert to Uppercase</button>
    <button className="btn btn-warning my-3 mx-2 " onClick={handleLoclick} >Convert to Lowercase</button>
    
    </div>
    <div className="container my-2 ">
      <h1>TextSummary</h1>
      <p>your total word is {Text.trim().split(" ").filter(word => word.length > 0).length} and character is {Text.length}</p>
    <p> {0.008*Text.trim().split(" ").filter(word => word.length > 0).length} Minutes in reading Words</p>
    <h3>Preview</h3>
    <p>{Text}</p>
    </div>
    
   </>
  )
}
