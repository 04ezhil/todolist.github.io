
import './App.css';
import './todoList.js';
import TodoList from './todoList.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DidList from './didList.js';


function App() {
  var list = ['wake up early','Do excersize'];
  let [todoList,setTodoList] = useState([]);
  let [didList,setDidList] = useState([]);
  

  let add = (what) => {
    what = what.trim();
    if(what==="") return;
    setTodoList([...todoList,what]);
  }
  let remove = (item)=>{
    setTodoList(todoList.filter((i) => i !== item));
  }
  let editList = (itemTobeRemoved , itemTobeAdded) => {
    itemTobeAdded = itemTobeAdded.trim();
    if(itemTobeAdded==="") return;
     let ind = todoList.findIndex((i) => i === itemTobeRemoved);
      let newList = [...todoList];
      newList.splice(ind,1);
      newList.splice(ind,0,itemTobeAdded);
      setTodoList(newList);
  }
  let addHist =(did) => {
    remove(did);
    setDidList([...didList,did]);
  }

  return (
    <>
    <nav className='navbar p-4 bg-indigo'>
      <div className='container-fluid'><h1 className='text-white'>TodoList</h1></div> 
    </nav>
    <div className='m-4 p-4 border border-3 rounded-3'><TodoList todos={todoList} addlist={add} addHistory={addHist} deleteItem={remove} editItem={editList}/></div>
    
    <hr/>
    <nav className='navbar p-4 bg-indigo-dark'>
      <div className='container-fluid'><h1 className='text-white'>Tasks Completed</h1>
      <form className="d-flex">
        <button className="btn btn-primary ps-4 pe-4" type="button" onClick={()=>setDidList([])}>clear</button>
      </form>
      </div> 
    </nav>
    <div className='m-4 p-4 border border-3 rounded-3'><DidList didList={didList}/></div>
    </>
  );
}

export default App;





