import React from 'react';
import './Todo.scss';
import Circle from '../../../assets/Circle.svg';
import Bin from '../../../assets/Bin.png';

const Todo = ({ h2, p }) => {
  return (
    <div className='Text'>
      <div className='textss'>
        <h2 className='text'>{h2}</h2>
        <p className='paragraph'>{p}</p>
      </div>
      <div className='icons'>
        <img src={Circle} alt="Circle" />
        <img src={Bin} alt="Bin" />
      </div>
    </div>
  );
};

export default Todo;
