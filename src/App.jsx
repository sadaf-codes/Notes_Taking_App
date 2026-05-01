import React from 'react'
import Navbar from './Navbar'
import './global.css' 
import NoteForm from './NoteForm'
import DisplayNotes from './DisplayNotes'
import NoteProvider from './NoteProvider'

const App = () => {
  return (
    <>
    <NoteProvider>
      <div className='mainWrapper'>
      <Navbar/>
    <main className='container'>
          <NoteForm/>
          <DisplayNotes/>
      </main>
      </div>
    </NoteProvider>
     
    
    </>
  )
}

export default App