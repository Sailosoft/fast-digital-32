import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MessagePage from './App/message/index.tsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(true);


  return (
   <MessagePage />
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
