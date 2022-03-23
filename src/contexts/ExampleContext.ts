import { createContext } from 'react';
const defaultValue = null;
export const ExampleContext = createContext<string | null>(defaultValue); // context 생성
