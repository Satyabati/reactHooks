import React, {useContext , useEffect} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = (props) =>{
    const { dispatch } = useContext(NotesContext);
    const position = useMousePosition();
    useEffect(() => {
      console.log('seting up effect')
  
       return () =>{
         console.log('Cleaning up effect')
       }
    }, [])
    return(
      <div key={props.note.title}>
      <h3>{props.note.title}</h3>
      <h3>{position.x} , {position.y}</h3>
      <p>{props.note.body}</p>
       <button onClick={() => dispatch({type: 'REMOVE_NOTE',title:props.note.title})}>x</button>
      </div>
    )
    
  }

  export default Note;