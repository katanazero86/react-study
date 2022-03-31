import React, { useEffect } from 'react';

// 최상단에는 인터페이스 또는 prop-types 를 정의
interface IExamplePracticeProps {
  msg?: string;
}

// props 는 구조분해할당을 통해, 어떤것들이 필요한지 기술
export default function ExamplePractice({ msg }: IExamplePracticeProps) {
  useEffect(() => {
    console.log(API_URL);
  }, []);

  return <div>가독성과 생산성을 높이자!</div>;
}

// 상수는 여기에다가 정의를 해주자.
const API_URL = '';
