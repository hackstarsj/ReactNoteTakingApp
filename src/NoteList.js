import AddNote from "./AddNote";
import NoteCard from "./NoteCard";
import React from "react";

export default function NoteList(props){
    // let noteList=[{"title":"Note 1","desc":"Hi"},{"title":"Note 2","desc":"Hi 2"},{"title":"Note 3","desc":"Hi 3"}];    //Simple Variable


    return <div>
        {/* <h4>Normal Variable</h4> */}
        {/* {noteList.map((item)=>{
          return <NoteCard title={item.title}/>
        })} */}
        
        <h2 className="title">List of Notes</h2>
        {props.noteListState.map((item,index)=>{
            return <NoteCard title={item.title} desc={item.desc} key={index} index={index} deleteItem={props.deleteItem} copyNote={props.copyNote}/>
        })}
    </div>
}