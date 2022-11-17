import { Button } from './Button';
import React, { useState } from 'react';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <Button
        type={'submit'}
        label={'click'}
        size={'large'}
        primary
        disabled={!value}
      />
    </form>
  );
};
