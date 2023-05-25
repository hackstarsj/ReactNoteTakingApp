import React from "react";

export default function NoteCard(props) {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <div className="card">
      <h3>
        {props.index + 1}. {props.title}
      </h3>
      {/* 10==9?console.log("Yes"):console.log("No") Terneary Operator */}
      {showDetails ? (
        <>
          <p> {props.desc}</p>{" "}
          <button
            onClick={() => {
              setShowDetails(false);
            }}
          >
            HIDE
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setShowDetails(true);
          }}
        >
          VIEW
        </button>
      )}
      <button
          className="deleteNote"
          onClick={() => {
            props.deleteItem(props.index)
          }}
        >
          DELETE
        </button>

        <button
          className="copyNote"
          onClick={() => {
            props.copyNote(props.index)
          }}
        >
          COPY NOTE
        </button>

        
    </div>
  );
}
