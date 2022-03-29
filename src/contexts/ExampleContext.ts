import { createContext } from 'react';
const defaultValue = null;
export const ExampleContext = createContext<any | null>(defaultValue); // context 생성
