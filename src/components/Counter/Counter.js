import React from 'react';

const CounterButton = ({ clicks, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Кликнули {clicks} раз
    </button>
  );
};

export default CounterButton;
