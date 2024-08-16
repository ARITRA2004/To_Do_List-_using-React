import { useState } from 'react'
import './App.css'

function App() {

  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handelChange(event) {
    const newEvent = event.target.value;
    setTask(newEvent);
  }

  function addItems() {
    setItems(prvItems => {
      return [...prvItems, task]
    })
  }


  return (
    <div className='container'>
      <div className='main-container'>
        <form action="">
          <div className='input'><input onChange={handelChange} value={task} placeholder='Add Task' type="text" /></div>
          <div><button onClick={addItems} type="button">Add</button></div>
        </form>
        <div className='gap'></div>
        <div className='all-items'>
          <ul>
            {items.map((allItems,index) => {
              return (
                <li key={index}>{allItems}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
