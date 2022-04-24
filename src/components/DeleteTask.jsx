import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function DeleteTask(props) {
  return (
    <button className='done' onClick={() => props.deleteTask(props.index)}>
      <FaCheck />
    </button>
  );
}
