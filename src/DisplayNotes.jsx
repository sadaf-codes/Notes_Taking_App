import React, { useContext } from "react";
import { NoteContext } from "./NoteProvider";

const DisplayNotes = () => {
  let data = useContext(NoteContext);

  let { task, selectedCategory, handleCategory, handleDelete, handleUpdate} = data;

  return (
    <main className="displaySection">
      <div className="notesBox">
      <div
        className="selectDisplayNotes"
        name="selectedCategory"
        value={selectedCategory}
        onChange={handleCategory}
      >
        <label>Select a category</label>
        <div className="radioGrid">
        <div className="radioOption">
          <input type="radio" value="all" name="selectedCategory" defaultChecked />
          <span>📋 All</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="meeting" name="selectedCategory" />
          <span>🗒️ Meeting Notes</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="tasks" name="selectedCategory" />
          <span>✅ Tasks</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="project" name="selectedCategory" />
          <span>👨‍💻 Project Ideas</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="lecture" name="selectedCategory" />
          <span>📖 Lecture Notes</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="assignments" name="selectedCategory" />
          <span>📝 Assignments</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="exam" name="selectedCategory" />
          <span>🧪 Exam Prep</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="diary" name="selectedCategory" />
          <span>💭 Thoughts / Diary</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="health" name="selectedCategory" />
          <span>🧘 Health & Wellness</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="shopping" name="selectedCategory" />
          <span>🛍️ Shopping List</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="todo" name="selectedCategory" />
          <span>📦 To-Do</span>
        </div>
        <div className="radioOption">
          <input type="radio" value="budget" name="selectedCategory" />
          <span>💵 Budget</span>
        </div>
        </div>
      </div> 

      <section className="displayBlock">
        <div className="displayNote">
           {
              task.length == 0 ? "Loading..." : task.map((item)=>{
                  return selectedCategory == "all" ? (
                     <div className="note" key={item.id}>
                         <h2>Title : {item.title}</h2>
                        <p>Description : {item.description}</p>
                        <p>Category : {item.category}</p>
                        <button onClick={()=>handleUpdate(item.id)}>Update</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>    
                     </div>
                  )   : (
                    selectedCategory === item.category  &&  (
                      <div className="note" key={item.id}>
                         <h2>Title : {item.title}</h2>
                        <p>Description : {item.description}</p>
                        <p>Category : {item.category}</p>
                        <button onClick={()=>handleUpdate(item.id)}>Update</button> 
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                     </div>
                    )
                  )
              })
           }
        </div>
      </section>
      </div>
    </main>
  );
};

export default DisplayNotes