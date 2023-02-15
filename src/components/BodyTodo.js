import React, { useContext } from "react";
import {Context} from "./Context"

function BodyTodo(){

    const [list, setList] = useContext(Context)

    function deleteElement(e){
        let filterItem = list.filter(it=>it !== e)
        setList(filterItem)
    }


    return(
        <ul className="lista">
            {list.map((element, index)=>
                                    <li key={index}>
                                        {element}
                                        <img onClick={()=>{deleteElement(element)}} alt="Delete" src="assets/images/trash.png"></img>
                                    </li>)}
        </ul>
    )
}

export default BodyTodo;