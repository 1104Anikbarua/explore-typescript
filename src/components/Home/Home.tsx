import React, { useState } from 'react';
import Input from '../Input/Input';
import './Home.css';
import { FormEvent } from 'react';

export interface Todo {
    id: number,
    todo: string,
    isDone: boolean,
}
const Home = () => {

    const [todo, setTodo] = useState<string>('')
    const [task, setTask] = useState<Todo[]>([]);
    // console.log(task)

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event?.preventDefault();
        if (todo) {
            setTask([...task, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo('')
        }
    }
    console.log(task)

    return (
        <div className='home'>
            <h1 className='heading'>Hello typescript</h1>
            <Input
                todo={todo}
                setTodo={setTodo}
                handleSubmit={handleSubmit}
            ></Input>
        </div >
    );
};

export default Home;