import React from 'react';

const CounterButton = ({ clicks, onClick, onContextMenu }) => {
  return (
    <button type="button" onClick={onClick} onContextMenu={onContextMenu}>
      Кликнули {clicks} раз
    </button>
  );
};

export default CounterButton;
