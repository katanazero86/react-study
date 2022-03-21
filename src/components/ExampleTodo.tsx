import React, {useState} from 'react';

export default function ExampleTodo() {

    // states
    const [desc, setDesc] = useState<string>('');
    const [todoList, setTodoList] = useState<{idx:number, desc:string}[]>([]);
    const [todoIdx, setTodoIdx] = useState<number>(1);

    const add = () => {

        const todo = {
            idx: todoIdx,
            desc: desc,
        };
        setTodoList([...todoList, todo]);
        setTodoIdx(todoIdx + 1);
    };

    return (
        <div>
            <h3>할 일</h3>
            <ul>
                {todoList.map(todo => <li><span>{todo.desc}</span></li>)}
            </ul>
            <input onChange={e => setDesc(e.target.value)} value={desc}/>
            <button onClick={add}>추가</button>
        </div>
    )
}