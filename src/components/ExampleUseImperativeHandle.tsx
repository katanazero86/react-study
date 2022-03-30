import React, { useState, useImperativeHandle, useRef } from 'react';

interface IPublicChildComponentHandle {
  setNumberValue(targetNumber: number): void;
  addNumberValue(): void;
}

const PublicChildComponent = React.forwardRef((props, ref) => {
  const [number, setNumber] = useState(0);

  // 마치 함수형 컴포넌트를 클래스처럼 public / private 하게 사용가능하게 해준다.
  // 첫번째 인자 : ref
  // 두번째 인자 : 외부로 공개할 함수(ref.current 로 접근)
  // 세번째 인자 : 의존성 배열
  useImperativeHandle(
    ref,
    () => {
      return {
        setNumberValue: (targetNumber: number) => setNumber(targetNumber),
        addNumberValue: () => setNumber(number + 1),
      };
    },
    [number],
  );

  return <div>number is {number}</div>;
});

// ref 속성명을 사용하고 싶다면, React.forwardRef() 함수 사용하기
export default function ExampleUseImperativeHandle() {
  const targetRef = useRef<IPublicChildComponentHandle>(null);

  return (
    <div>
      <PublicChildComponent ref={targetRef} />
      <button onClick={() => targetRef?.current?.addNumberValue()}>숫자 값 증가시키기</button>
      <button onClick={() => targetRef?.current?.setNumberValue(0)}>숫자 값 초기화</button>
    </div>
  );
}
