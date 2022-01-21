import React, {useState , useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import Notelist from './noteList';
import AddNoteForm from './addNoteForm';
import NotesContext from '../context/notes-context';
const NoteApp = () =>{
    const [notes, dispatch] = useReducer(notesReducer ,[]);
   // const [notes, setNotes] = useState([] );

    useEffect(() => {
      console.log('use Effectshould be called once');
      const notes = JSON.parse(localStorage.getItem('notes')); 
      if(notes){
        dispatch({type:'POPULATE_NOTES', notes})
      }
    },[]);
  
  
     useEffect(() => {
      console.log('use Effect called');
      const json = JSON.stringify(notes);
      localStorage.setItem('notes',json)
    },[notes]);
    
    return (
      <NotesContext.Provider value={{notes,dispatch}}>
      <h1>Notes</h1>
       <Notelist/>
      <p>Add note</p>
       <AddNoteForm/>
      </NotesContext.Provider>
    )
  }

  export default NoteApp;