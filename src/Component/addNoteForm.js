import React,{useState , useContext} from 'react';
import NotesContext from '../context/notes-context';
const AddNoteForm = () =>{
  const { dispatch } = useContext(NotesContext);
    const addNote = (e)=>{
        e.preventDefault()
        dispatch({
          type:'ADD_NOTE',
          title,
          body
        })
        setTitle('');
        setBody('');
      }
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    return (
        <>
        <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Notes</button>
        </form>
        </>
    )
}


export default AddNoteForm;