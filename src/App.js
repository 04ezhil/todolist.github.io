
import './App.css';
import './todoList.js';
import './didList.js';
import TodoList from './todoList.js';
import DidList from './didList.js';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  var list = ['wake up early','Do excersize'];
  let [todoList,setTodoList] = useState([]);
  let [didList,setDidList] = useState([]);
  

  let add = (what) => {
    setTodoList([...todoList,what]);
  }
  let addHist =(did) => {
    setTodoList(todoList.filter((i) => i !== did));
    setDidList([...didList,did]);
  }

  return (
    <>
    <nav className='navbar p-4 bg-indigo'>
      <div className='container-fluid'><h1 className='text-white'>TodoList</h1></div> 
    </nav>
    <TodoList todos={todoList} addlist={add} addHistory={addHist}/>
    <hr/>
    <nav className='navbar p-4 bg-indigo-dark'>
      <div className='container-fluid'><h1 className='text-white'>Tasks Completed</h1>
      <form className="d-flex">
        <button className="btn btn-primary ps-4 pe-4" type="button" onClick={()=>setDidList([])}>clear</button>
      </form>
      </div> 
    </nav>
    <DidList didList={didList}/>
    
    </>
  );
}

export default App;





