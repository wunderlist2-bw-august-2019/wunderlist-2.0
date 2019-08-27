import React, { memo } from "react";
import ReactDOM from "react-dom";
import { useInputValue, useTodos } from "../Hooks/CustomHooks";
import Layout from "./Layout";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./todoList.css";

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();


  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  let todoCount = todos.length;

// if (todoCount = 0) {
//   return (
//     <div className= "todoList">
//       <h3>Are you being lazy or productive? we ask because you have nothing to do. </h3>
//     </div>
//   )
// }
return (      

    <Layout>
    
     <AddTodo 
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
     />   
<div className="todoList">
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
      </div>
    </Layout>
 
  );
});

export default TodoApp;
