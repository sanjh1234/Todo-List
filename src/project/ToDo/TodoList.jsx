import { GiCheckMark } from "react-icons/gi"
import { IoTrashBin } from "react-icons/io5"

export const TodoList = ({ data, checked, onHandleDelete, onHandleCheck }) => {
    return (
        <li className='todo-item'>
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button
                className="check-btn"
                onClick={() => { onHandleCheck(data) }}
            >
                <GiCheckMark />
            </button>
            <button
                className='delete-btn'
                onClick={() => { onHandleDelete(data) }}
            >
                <IoTrashBin />
            </button>
        </li>
    )
}