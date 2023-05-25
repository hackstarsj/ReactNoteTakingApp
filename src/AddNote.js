import React from "react";

export default function AddNote(props) {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const addItem = () => {
    props.addIteminList({ title: title, desc: desc });
    setTitle("");
    setDesc("");
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="form-group">
        <label>Title : </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        {/* Inline function */}
      </div>
      <div className="form-group">
        <label>Description : </label>
        <textarea
          name="description"
          rows={5}
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          value={desc}
        ></textarea>
      </div>
      <div className="form-group">
        <button onClick={addItem}>Add Note</button>
      </div>
    </div>
  );
}
