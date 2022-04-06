import React, { useEffect, useMemo, useState } from 'react';

// 최상단에는 인터페이스 또는 prop-types 를 정의
interface IExamplePracticeProps {
  msg?: string;
}

// export default 컴포넌트에 포함될 컴포넌트를 정의
const Intro = () => {
  useEffect(() => {
    console.log(API_URL);
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

const Main = ({ isUser = false }) => {
  // bad
  // return (
  //   <div>
  //     {isUser ? '로그인 성공' : '로그인 실패'}
  //   </div>
  // )

  const isUserResult: string = isUser ? '로그인 성공' : '로그인 실패';

  return <div>{isUserResult}</div>;
};

// props 는 구조분해할당을 통해, 어떤것들이 필요한지 기술
export default function ExamplePractice({ msg }: IExamplePracticeProps) {
  useEffect(() => {
    console.log(API_URL);
  }, []);

  // 연관된 코드
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const getUserInfo = useMemo(() => {
    return `${name}:${age}`;
  }, [name, age]);

  const getName = useMemo(() => {
    return `${name}`;
  }, [name]);

  const getAge = useMemo(() => {
    return `${age}`;
  }, [name]);

  const modifyName = (newName: string) => {
    setName(newName);
  };

  // 기능 단위(관심사)
  const [name2, setName2] = useState('');

  const getName2 = useMemo(() => {
    return `${name2}`;
  }, [name2]);

  const modifyName2 = (newName: string) => {
    setName2(newName);
  };

  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <Intro />
      가독성과 생산성을 높이자!
      {isShow && <div> 나는 쇼!</div>};
    </div>
  );
}

// 상수는 여기에다가 정의를 해주자.
const API_URL = '';
