import NoteList from "./NoteList";
import AddNote from "./AddNote";
import React from "react";

export default function Home() {
  let [noteListState, setNoteListState] = React.useState([]); //State Variable
  let [errorMsg,setErrorMsg]=React.useState('');
  const addIteminList = (item) => {
    if(item.title=="" || item.desc==""){
        setErrorMsg('Please Enter Title and Description...');
        return;
    }
    //        noteList.push(item)
    noteListState.push(item);
    setNoteListState([...noteListState]); //Copy Array
    // noteList=[...noteList];
    // console.log(noteList)
    console.log(noteListState);
  };

  const deleteItem=(index)=>{
    noteListState.splice(index,1);
    setNoteListState([...noteListState]); //Copy Array
  }

  const copyNote=(index)=>{
    let item={title:noteListState[index].title,desc:noteListState[index].desc}
    noteListState.push(item);
    setNoteListState([...noteListState]); //Copy Array

  }

  return (
    <>
        <h2 className="title">Note Taking App</h2>
      <AddNote addIteminList={addIteminList} />
      {errorMsg!=""?<div><p className="error-alert">{errorMsg} <span onClick={()=>{ setErrorMsg('') }}>X</span></p></div>:""}
      <br />
      <hr />
      <NoteList noteListState={noteListState} deleteItem={deleteItem} copyNote={copyNote}/>
    </>
  );
}
