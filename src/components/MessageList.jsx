import React from 'react';

export const MessageList = ({ messages }) => {
  return (
    <>
      <ul>
        {messages.map((message, ind) => (
          <li key={ind}>
            <b>{message.author}</b>: {message.value}
          </li>
        ))}
      </ul>
    </>
  );
};
