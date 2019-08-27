import React, { memo } from "react";
import ReactDOM from "react-dom";
import { useInputValue, useTodos } from "../Hooks/CustomHooks";
import Layout from "./Layout";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();


  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  let todoCount = todos.length;

if (todoCount === 0) {
  return (
    <h3>You do have nothing to do.</h3>
  )
}
   
return (      

    <Layout>
    
     {/* <AddTodo 
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
     />   */}
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
      
    </Layout>
 
  );
});

export default TodoApp;
