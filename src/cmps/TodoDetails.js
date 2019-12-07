import React from 'react';

function TodoDetails() {

  return (
    <div className="TodoDetails">
      <h3>TodoDetails</h3>
      <ul className="details clean-list">
        <li>Name: <span>Omer</span></li>
        <li>Age: <span>38</span></li>
        <li>Location: <span>Bolivia</span></li>
      </ul>
    </div>
  );
}

export default React.memo(TodoDetails)