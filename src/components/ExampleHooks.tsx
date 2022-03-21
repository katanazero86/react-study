import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

interface IChildComponentProps {
  number?: number;
  increaseNumber?(): void;
}

const ChildComponent = ({ number, increaseNumber }: IChildComponentProps) => {
  // useEffect()
  // 매 렌더링마다 실행
  useEffect(() => {
    console.log('useEffect..');
  });

  // 렌더링 되고 한번만 실행
  useEffect(() => {
    console.log('mount');
  }, []);

  // 렌더링 되고 한번만 실행 + unmount 됬을 때 실행
  useEffect(() => {
    return () => console.log('unmount');
  }, []);

  // useLayoutEffect()
  useLayoutEffect(() => {
    console.log('useLayoutEffect..');
  }, []);

  return (
    <div>
      Child {number} <button onClick={increaseNumber}>increase Number</button>
    </div>
  );
};

export default function ExampleHooks() {
  // useState()
  const [msg, setMsg] = useState<string>('testMsg');
  const [name, setName] = useState<string>('zero86');
  const [number, setNumber] = useState<number>(0);

  const changeStates = () => {
    // 비동기 처리
    setMsg('msg changed..');
    setName('홍길동');
  };

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  // useCallback()
  const alertNumber = useCallback(() => {
    alert(number);
  }, []);

  // useMemo()
  const printMsg = useMemo(() => {
    console.log('call useMemo..');
    return `return ${msg}`;
  }, [msg]);

  return (
    <div>
      {msg} <br />
      {name} <br />
      <b>useMemo: {printMsg}</b> <br />
      <button onClick={changeStates}>state 변경</button> <br />
      <button onClick={alertNumber}>alertNumber</button> <br />
      <ChildComponent number={number} increaseNumber={increaseNumber} />
    </div>
  );
}
