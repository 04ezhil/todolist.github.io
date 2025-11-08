import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';

function TodoList({ todos, addlist,addHistory}) {
    function adding(newTodo) {
        handleClose();
        addlist(newTodo);
    }
    const [show, setShow] = useState(false);
    let [newTodo,setNewTodo] = useState("");

    const handleChange = (e) => setNewTodo(e.target.value);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return (
        <>
            <ol >
                {todos.length > 0 ? todos.map((list, index) => {
                    return (
                        <li key={index} className='card mt-2'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='card-title text-indigo'>{list}</p>
                                    <button type="button" className="btn btn-success " onClick={() => {addHistory(list)}}>Done</button>
                                    </div>
                            </div>
                        </li>
                    );
                }) : <h2 className='mt-3 p-3' style={{ color: 'red'  ,fontFamily:'Tangerine',fontWeight:'bold',fontSize:'50px'}}>Create a new task to complete.</h2>}
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
            <button type="button" className="btn btn-primary m-4" onClick={() => {handleShow()} } >Add</button>
        </>
    );
}
export default TodoList;