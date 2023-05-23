import React from "react"

export default function NoteCard(props){
    const [showDetails,setShowDetails]=React.useState(false)
    return <div><h3>{props.title}</h3> 
              {/* 10==9?console.log("Yes"):console.log("No") Terneary Operator */}
              {showDetails?<><p>{props.desc}</p> <button onClick={()=>{ setShowDetails(false); }}>HIDE</button></>:<button onClick={()=>{ setShowDetails(true); }}>VIEW</button>}
              </div>
}