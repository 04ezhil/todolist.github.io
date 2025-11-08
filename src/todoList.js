import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TodoList({ todos, addlist, addHistory, deleteItem, editItem }) {
  function adding(newTodo) {
    handleClose();
    if (newTodo === "") return;
    addlist(newTodo);
    setNewTodo("");
  }
  const [show, setShow] = useState(false);
  let [isEdit, setEdit] = useState(false);
  let [newTodo, setNewTodo] = useState("");
  let [editItemValue, setEditItemValue] = useState("");

  const handleChange = (e) => setNewTodo(e.target.value);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let edit = (item) => {
    setEdit(true);
    setNewTodo(item);
    setEditItemValue(item);
  }

  let editOk = ()=>{
    setEdit(false);
    editItem(editItemValue, newTodo);
  }

  let editCancel = () => {
  setEdit(false);
  setEditItemValue("");
  setNewTodo("");
  }



  return (
    <>
      <ol >
        {todos.length > 0 ? todos.map((item, index) => {
          return (
            <li key={index} className='card mt-2'>
              <div className='card-body'>
                
                  {isEdit ? <div className='d-flex justify-content-between align-items-center'>
                    <input type='text' className='ms-auto input-text-box' onChange={handleChange} value={newTodo}></input>
                  <button type="button" className="btn btn-primary m-1 " onClick={() => { editOk() }}>Ok</button>
                        <button type="button" className="btn btn-danger m-1 " onClick={() => { editCancel()}}>Cancel</button>
                  </div>:
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='card-title text-indigo' key={index}>{item}</p>
                      <div>
                        <button type="button" className="btn btn-primary m-1 " onClick={() => { edit(item) }}>Edit</button>
                        <button type="button" className="btn btn-danger m-1 " onClick={() => { deleteItem(item) }}>Cancel</button>
                        <button type="button" className="btn btn-success m-1" onClick={() => { addHistory(item) }}>Done</button>
                      </div>
                    </div>
                  }
                </div>
            
            </li>
          );
        }) : <h2 className='mt-3 p-3' style={{ color: 'red', fontFamily: 'Tangerine', fontWeight: 'bold', fontSize: '50px' }}>Create a new task to complete.</h2>}
      </ol>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task to be done</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' className='ms-auto input-text-box' onChange={handleChange}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => adding(newTodo)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <button type="button" className="btn btn-primary m-4" onClick={() => { handleShow() }} >Add</button>
    </>
  );
}
export default TodoList;