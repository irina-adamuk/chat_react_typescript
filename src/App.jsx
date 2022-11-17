import { AUTHOR } from './constants';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import React, { useEffect, useState } from 'react';

import './App.css';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (value) => {
    setMessages([
      ...messages,
      {
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const botTimeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: 'I am BOT',
          },
        ]);
      }, 1000);
      return () => {
        clearTimeout(botTimeout);
      };
    }
  }, [messages]);

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
