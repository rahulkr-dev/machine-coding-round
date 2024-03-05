
import React, { createContext,useContext,useState } from "react";

export type todoType = {
    message:string,
    id:number | string
}
export type todoContextType = {
    todos:todoType[];
    addTodo:(todo:string)=>void;
    deleteTodo:(id:number | string)=>void
}
const todoContext = createContext<todoContextType>({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {}
});

export const useTodoContext = ()=>{
    return useContext(todoContext)
};

 const TodoProvider = ({children}:{children:React.ReactNode})=>{
    const [todos,setTodos] = useState<todoType[]>([]);

    const addTodo  =(message:string)=>{
        setTodos([...todos,{message,id:Date.now()}])
    };

    const deleteTodo = (id:number | string)=>{
        const filterTodos = todos.filter(todo=>id!==todo.id);
        setTodos(filterTodos);
    }

    return (
        <todoContext.Provider value={{todos,addTodo,deleteTodo}}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoProvider






