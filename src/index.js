import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NoteApp from './Component/noteapp';

// const App = (props) =>{
//   const [count , setCount] = useState(props.count);
//   const [text, setText] = useState('')
//   useEffect(() => {
//     console.log('this should run only once')
//   }, []);

//   useEffect(() => {
//     console.log('effect changes')
//     document.title = count;
//   }, [count]);
//   return(
//     <div>
//     <p> The current {text || 'count'} is {count}</p>
//     <button onClick={() => setCount(count + 1)}>+1</button><br/>
//     <button onClick={() => setCount(count - 1)}>-1</button><br/>
//     <button onClick={() => setCount(props.count)}>Reset</button><br/>
//     <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

ReactDOM.render(
  <NoteApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
