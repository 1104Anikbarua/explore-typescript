// import React, { MouseEventHandler } from 'react';

import { FormEvent } from 'react';
import './Input.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const Input = ({ todo, setTodo, handleSubmit }: Props) => {
    // console.log(todo)


    return (
        <>
            <form action="" className='input' onSubmit={handleSubmit}>
                <input value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='input_box' type="text" placeholder='Write Something' />

                <button
                    // onClick={() => handleSubmit(todo)}
                    className='input_submit' type='submit'>
                    Submit</button>
            </form>
        </>
    );
};

export default Input;