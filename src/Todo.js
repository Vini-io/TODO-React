import React from "react";
import HeaderTodo from "./components/HeaderTodo"
import BodyTodo from "./components/BodyTodo"
import { Provider } from "./components/Context"

function TODO() {
    return (

        <Provider>
            <HeaderTodo />
            <BodyTodo />
        </Provider>

    )
}

export default TODO;