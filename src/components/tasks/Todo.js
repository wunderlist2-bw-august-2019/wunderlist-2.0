import React, { memo, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Layout from "./Layout";
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
  todoList: {
    paddingTop: '30px',
    alignContent: 'center',
    textAlign: 'center'
  }
}));

const TodoApp = memo(props => {
  const classes = useStyles();

  useEffect(() => {
    props.getTodos();
  }, [])

  return (      
    <Layout>
      <div className={classes.todoList}>
        <TodoList
          items={props.todos}
          getTodos={props.getTodos}
        />
      </div>
    </Layout>
  );
});

export default TodoApp;
