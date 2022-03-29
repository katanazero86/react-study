import React, { useEffect, useState, useRef } from 'react';

const TextInput = ({ inputRef }: { inputRef: React.LegacyRef<HTMLInputElement> }) => {
  return <input type='text' ref={inputRef} />;
};

export default function RefComponent() {
  const [inputText, setInputText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('hello Ref');
  const prevValue = useRef<any>();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    prevValue.current = text;
  }, [text]);

  const targetPrevValue = prevValue.current;

  return (
    <div>
      <input type='text' ref={inputRef} onInput={e => setInputText((e.target as HTMLInputElement).value)} />
      <p>{inputText}</p>
      <TextInput inputRef={inputRef2} />
      <button
        onClick={() => {
          if (inputRef2.current) inputRef2.current.focus();
        }}
      >
        포커스 이동
      </button>
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
      {targetPrevValue}
    </div>
  );
}
