import React, { useState } from 'react';

// 제어 컴포넌트
export default function ControlComponent() {
  const [userInput, setUserInput] = useState('');

  return (
    <div style={{ border: '1px dotted red', padding: '6px' }}>
      <p>ControlComponent</p>
      <input type='text' onChange={e => setUserInput(e.target.value)} value={userInput} />
    </div>
  );
}
