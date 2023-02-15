import React, { useContext, useState } from "react";
import { Context } from "./Context";

function HeaderTodo() {

    const [text, setText] = useState('')
    const [list, setList] = useContext(Context)


    function getInput(e) {
        setText(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault()
        if (text) {
            setList([...list, text])
            setText('')
        }
    }

    return (

        <form className='inputTodo'>
            <input onChange={getInput} placeholder="Sua tarefa" value={text}></input>
            <button onClick={addTodo}><img alt="+" width='20px' src="assets/images/add.png"></img></button>
        </form>

    )

}

export default HeaderTodo;