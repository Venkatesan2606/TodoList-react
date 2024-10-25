import './App.css'; 
import InputArea from './components/InputArea';
import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => [...prevItems, inputText]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-do List</h1>
      </div>
      <InputArea addItems={addItems} />

      <ul>
        {items.map((item, index) => (
          <TodoItem key={index} text={item} deleteItem={deleteItem} id={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
