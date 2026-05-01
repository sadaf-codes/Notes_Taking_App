import { createContext, useState , useEffect } from "react"; 
import {v4 as uuidv4} from 'uuid'

export let NoteContext = createContext()  


const NoteProvider = (props) => { 

  let [state , setState] = useState({
    title : "",
    description : "",
    category : ""
  })   
   
   //to get the data(task) from localStorage 
   let getLocalItems = ()=>{
    let lists = localStorage.getItem("lists")
    if(lists){
      return JSON.parse(lists)   
    } else {
      return []
    }
  }   
  
  let [task , setTask] = useState(getLocalItems()) // stores multiples notes together   
  
  const addTask = (title , description , category)=>{
     setTask([...task ,{title , description , category , id : uuidv4()}])  
  }  

  // to add task in localStorage 
  useEffect(()=>{
    localStorage.setItem("lists", JSON.stringify(task))
  },[task])      
  
  let [selectedCategory, setSelectedCategory] = useState("all") 

  let handleCategory = (e)=>{
     setSelectedCategory(e.target.value) 
  }

  let handleDelete = (x)=> {
    let filteredItem = task.filter(item=> item.id != x)
    setTask(filteredItem)
  }

  let handleUpdate = (y)=> {
    let remainingItems = task.filter(item=> item.id != y)
    let editItems = task.find(item=> item.id == y)
    setTask(remainingItems)
    setState(editItems)
  }

  return (
    <NoteContext.Provider value={{state, setState, addTask, task, selectedCategory, handleCategory, handleDelete, handleUpdate}}>    
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteProvider