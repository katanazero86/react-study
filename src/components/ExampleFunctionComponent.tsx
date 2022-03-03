import React, { useEffect, useState } from 'react';

interface IExampleClassComponentProps {
  msg?: string;
}

export default function ExampleFunctionComponent({ msg = '' }: IExampleClassComponentProps) {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    setName('ExampleFunctionComponent');
  }, []);

  return (
    <div>
      {msg} {name}
    </div>
  );
}
