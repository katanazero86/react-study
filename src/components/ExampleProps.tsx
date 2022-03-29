import React, { useState } from 'react';

interface IChildComponentProps {
  msg?: string;
}

const ChildComponent = ({ msg }: IChildComponentProps) => {
  const onClick = () => {
    msg = '변경이 될까요?';
  };

  return (
    <div>
      {msg}
      <button onClick={onClick}>변경</button>
    </div>
  );
};

export default function ExampleProps() {
  const [msg, setMsg] = useState('zz');

  return (
    <div>
      <ChildComponent msg={msg} />
    </div>
  );
}
