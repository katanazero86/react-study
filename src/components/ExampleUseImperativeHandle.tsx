import React, { useState, useImperativeHandle, useRef } from 'react';

const PublicChildComponent = React.forwardRef(() => {
  return <div>PublicChildComponent</div>;
});

// ref 속성명을 사용하고 싶다면, React.forwardRef() 함수 사용하기
export default function ExampleUseImperativeHandle() {
  // App 컴포넌트에서 에서 ref 를 넘기지 않았다면 null 로 넘어와 에러가 일어나게 된다.

  const [number, setNumber] = useState(0);
  const targetRef = useRef(null);

  return (
    <div style={{ border: '1px dotted red', padding: '4px' }}>
      <p>useImperativeHandle</p>
      <PublicChildComponent ref={targetRef} />
      <button onClick={() => publicChildComponentRef.current && publicChildComponentRef.current.addNumberValue()}>
        숫자 값 증가시키기
      </button>
      <button onClick={() => publicChildComponentRef.current && publicChildComponentRef.current.setNumberValue(0)}>
        숫자 값 초기화
      </button>
    </div>
  );
}
