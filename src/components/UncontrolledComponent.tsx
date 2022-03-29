import React, { useRef } from 'react';

// 비제어 컴포넌트
export default function UncontrolledComponent() {
  const userInputRef = useRef(null);

  return (
    <div style={{ border: '1px dotted red', padding: '6px' }}>
      <p>UncontrolledComponent</p>
      <input type='text' ref={userInputRef} />
    </div>
  );
}
