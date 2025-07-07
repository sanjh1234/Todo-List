import { useState } from 'react';
import './Todo.css';
import { TodoForm } from './todoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';


export const Todo = () => {

    // all states 
    const [task, setTask] = useState(() => getLocalStorageData());


    // handle and submit form 
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        if (!content) return;

        const ifContentMatch = task.find(
            (curTask) => curTask.content == content
        );

        if (ifContentMatch) {
            alert("Already Exist!! Add different Task");
            return;
        }

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }


    // add data to local storage 
    setLocalStorageData(task);


    // delete todo from list  
    const handleDelete = (curTask) => {
        setTask(task.filter(item => item.content != curTask))
    }


    // check todo items in the list 
    const handleCheck = (curTask) => {
        setTask(task.map((item) => {
            if (item.content == curTask) {
                return { ...item, checked: !item.checked }
            }
            else {
                return { ...item }
            }
        }))
    }


    // clear all todo item
    const handleClearAll = () => {
        setTask([])
    }




    return (
        <section className='todo-container'>
            <header>
                <h1>ToDo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {
                        return (
                            <TodoList
                                key={curTask.id}
                                data={curTask.content}
                                checked={curTask.checked}
                                onHandleDelete={handleDelete}
                                onHandleCheck={handleCheck}
                            />
                        )
                    })}
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    );
}