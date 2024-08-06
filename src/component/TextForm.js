import React, {useState} from 'react';

export default function TextForm(props) {
  const handleClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleClear = () =>{
    setText("");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter Text here!!!")
  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="myTextArea" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to UPPERCASE</button>
        <button className='btn btn-secondary' onClick={handleClear}>Clear All</button>
      </div>
      <div className='container my-2'>
        <h4>Text Summary:</h4>
        <p>{text.split(" ").length} words, {text.length} characters</p>
      </div>
    </>
  );
}
