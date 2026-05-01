import React, { useContext } from 'react'
import { NoteContext } from './NoteProvider'

const NoteForm = () => { 
   
  let data = useContext(NoteContext)
  console.log(data); //{state: {…}, setState: ƒ, addTask: ƒ}
   
  let {state , setState , addTask} = data 
  let {title , description , category} = state 

  let handleChange = (e)=>{
     let {name , value} = e.target 
     setState({...state, [name]:value})  
  }  

  let handleSubmit = (e)=>{
      e.preventDefault() 
      addTask(title , description , category)
      setState({title : "", description : "", category :""})
  }

  return (
     <main className='formBlock'>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <label>Title</label>
          <input type="text" name='title' value={title} onChange={handleChange}/>
        </div>

        <div className="form-content">
          <label>Description</label>
           <textarea cols={50} rows={10} name='description' value={description} onChange={handleChange}></textarea>
        </div>

        <div className='form-content'>
          <label>Category</label> 
           <select name='category' value={category} onChange={handleChange}>
           <option value="" disabled hidden>Select a category</option>
           <optgroup label="Work / Professional">
           <option value="meeting">📝 Meeting Notes</option>
           <option value="tasks">📋 Tasks</option>
           <option value="project">🧑‍💻 Project Ideas</option>
           </optgroup>

           <optgroup label="Study / Learning">
           <option value="lecture">📖 Lecture Notes</option>
           <option value="assignment">🧪 Assignments</option>
           <option value="exam">📝 Exam Prep</option>
           </optgroup>

           <optgroup label="Personal">
           <option value="diary">💭 Thoughts / Diary</option>
           <option value="health">🧘 Health & Wellness</option>
           <option value="shopping">🛍️ Shopping List</option>
           </optgroup>

           <optgroup label="Other">
           <option value="todo">📦 To-Do</option>
           <option value="budget">💵 Budget</option>
           </optgroup>
           </select>
        </div>
       
       <button style={{ marginLeft: "6%" }}>Submit</button>  
      </form>
     </main>
  )
}

export default NoteForm