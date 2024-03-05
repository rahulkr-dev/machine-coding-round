import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { todoContextType, todoType, useTodoContext } from "./context/todoContext"

const TodoContainer = () => {
  const { todos,deleteTodo } = useTodoContext() as todoContextType;
  return (
    <div className="lg:w-2/4 m-auto bg-gray-100 p-4 mt-4 ">
      {todos.map((todo:todoType,index) => (
        <div className="gap-2 items-center grid grid-cols-12" key={todo.id}>
          <p>{index+1}</p>
          <p className="col-span-10">
          {todo.message}
          </p>
          <span onClick={()=>deleteTodo(todo.id)} className="text-red-500 cursor-pointer">
            <MdOutlineDelete />
          </span>
        </div>
      ))}
    </div>
  );
};

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodoContext() as todoContextType;
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setTodo(value);
  };
  const handleClick = ()=>{
    addTodo(todo);
    setTodo("");
  }
  return (
    <div className="border-2 p-2 lg:w-1/4 m-auto">
    <input className="w-[85%] focus:outline-none" type="text" value={todo} onKeyUp={(e)=>{
      if(e.key === "Enter"){
        addTodo(todo);
        setTodo("");
      }
    }} onChange={handleChange} />
    <button className="cursor-pointer" onClick={handleClick}>Add</button>
  </div>
  )

};

const Todos = () => {
  return (
    <div> 
      <AddTodo />
      <TodoContainer />
    </div>
  )
}

export default Todos