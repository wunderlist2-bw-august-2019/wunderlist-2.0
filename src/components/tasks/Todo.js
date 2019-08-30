import React, { useState, memo, useEffect } from "react";
import Layout from "./Layout";
import TodoList from "./TodoList";
import "./todoList.css";

const TodoApp = memo(props => {
  useEffect(() => {
    props.getTodos();
  }, [])

  return (      
    <Layout>
      <div className="todoList">
        <TodoList
          items={props.todos}
          getTodos={props.getTodos}
        />
      </div>
    </Layout>
 
  );
});

export default TodoApp;
