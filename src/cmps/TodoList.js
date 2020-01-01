import React, { useState } from 'react';

function TodoList() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const addNew = () => {
    setList(list => ([...list, { name: value }]));
    setValue('');
  }

  const todos = list.map((item, idx) => {
    return <li key={`${item.name}${idx}`}>
      <span>{item.name}</span>
    </li>
  })

  return (
    <div className="TodoList">
      <h3>TodoList</h3>
      <div>
        <input type="text" onChange={ev => setValue(ev.target.value)} value={value} />
        <span onClick={addNew}>New</span>
      </div>
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(TodoList)