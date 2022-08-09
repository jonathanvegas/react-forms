import {useState} from 'react';
import './App.css';
import React from 'react';

function App() {

  const [title,setTitle] = useState("This is Title");
  const [description, setDescription] = useState("your description");
  const [author, setAuthor] = useState("todd albert");

  console.log(title);

  return (
    <div className="App">
      <form>
        <h1>Comments</h1>
        {/* here goes the title */}
        <label>Title</label>
        <input 
        type = "text" 
        value={title}
        onChange ={(e)=>{setTitle(e.target.value)}}
        />
        <h3>{title}</h3>
        <label>Description</label>
        <textarea 
        value = {description}
        onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <h3>{description}</h3>

        <label>Author</label>
        <select value={author}
        onChange={(e)=> {setAuthor(e.target.value)}}
        >

          <option value="" selected>Choose one</option>
          <option value="Jonathan">Jonathan</option>
          <option value="todd albert">Doctor Tod</option>
          <option value="other">Other</option>
        </select>
        <h3>{author}</h3>

        <button>Submit Form</button>

      </form>
    </div>
  );
}

export default App;
