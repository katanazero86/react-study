import React, { useState } from 'react';
import logo from '../logo.svg';
import './Home.scss'; // scss
import ExampleClassComponent from '../components/ExampleClassComponent';
import ExampleFunctionComponent from '../components/ExampleFunctionComponent';
import ExampleHooks from '../components/ExampleHooks';
import { ExampleContext } from '../contexts/ExampleContext';
import useMounted from '../customs/useMounted';
import RefComponent from '../components/RefComponent';
import ExampleUseImperativeHandle from '../components/ExampleUseImperativeHandle';

export default function Home() {
  const [hello, setHello] = useState('Hello World!');
  const [providerValue, setProviderValue] = useState<string | undefined>('Hello Provider');
  const mounted = useMounted();

  return (
    <div className='app'>
      <header className='app--header'>
        <img src={logo} className='logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <p className='app--hello'>{hello}</p>
      <ExampleClassComponent msg='나는 클래스형 컴포넌트' />
      <ExampleFunctionComponent msg='나는 함수 컴포넌트' />
      <hr />
      <ExampleContext.Provider value={{ providerValue, setProviderValue }}>
        <ExampleHooks />
      </ExampleContext.Provider>
      {mounted && <p>mounted</p>}
      <RefComponent />
      <ExampleUseImperativeHandle />
    </div>
  );
}
