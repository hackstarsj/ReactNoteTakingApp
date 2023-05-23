import AddNote from "./AddNote";
import NoteCard from "./NoteCard";
import React from "react";

export default function NoteList(){
    // let noteList=[{"title":"Note 1","desc":"Hi"},{"title":"Note 2","desc":"Hi 2"},{"title":"Note 3","desc":"Hi 3"}];    //Simple Variable
    let [noteListState,setNoteListState]=React.useState([]); //State Variable

    const addIteminList=(item)=>{
//        noteList.push(item)
        noteListState.push(item)
        setNoteListState([...noteListState]); //Copy Array 
        // noteList=[...noteList];
        // console.log(noteList)
        console.log(noteListState)
    }

    return <div>
        <AddNote addIteminList={addIteminList}/>
        <br/>
        <hr/>
        {/* <h4>Normal Variable</h4> */}
        {/* {noteList.map((item)=>{
          return <NoteCard title={item.title}/>
        })} */}
        <hr/>
        <h4>List of Notes</h4>
        {noteListState.map((item)=>{
            return <NoteCard title={item.title} desc={item.desc}/>
        })}
    </div>
}