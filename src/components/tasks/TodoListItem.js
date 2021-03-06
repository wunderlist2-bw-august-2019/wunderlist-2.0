import React, { memo, useState, useEffect } from "react";
import axios from "axios";

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import EditTodo from "./EditTodo";
import { EventEmitter } from "events";

const TodoListItem = memo(props => {
  const todo = props.todo;
  const [updateTask, setUpdateTask] = useState(todo.completed);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    axios.put(`https://wunderlist-2.herokuapp.com/api/todos/${todo.id}`, {
      completed: updateTask
    });
  }, [updateTask]);

  const toggleChecked = event => {
    event.stopPropagation();
    setUpdateTask(!updateTask);
  };

  const deleteNote = () => {
    axios
      .delete(`https://wunderlist-2.herokuapp.com/api/todos/${todo.id}`, {
        id: props.id
      })
      .then(res => {
        props.getTodos();
        alert(res.data.message);
      })
      .catch(err => console.error(err));
  };

  const toggleExpand = event => {
    setExpand(!expand);
  };

  return (
    <>
      <ListItem
        divider={expand ? true : props.divider}
        onClick={toggleExpand}
        style={{ cursor: "pointer" }}
      >
        <Checkbox onClick={toggleChecked} checked={updateTask} disableRipple />
        <div style={{ flexDirection: "row" }}>
          {updateTask ? (
            <>
              <ListItemText
                secondary={todo.title}
                style={{ textDecoration: "line-through" }}
              />
              <ListItemText
                primary={todo.task}
                style={{ textDecoration: "line-through" }}
              />
            </>
          ) : (
            <>
              <ListItemText secondary={todo.title} />
              <ListItemText primary={todo.task} />
            </>
          )}
        </div>
        <ListItemSecondaryAction>
          <EditTodo todo={todo} getTodos={props.getTodos} />
          <IconButton
            aria-label="Delete Todo"
            onClick={deleteNote}
            color="secondary"
          >
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {expand ? (
        <ListItem divider>
          <ListItemText
            primary="Notes:"
            secondary={
              todo.notes ? todo.notes : "This item does not have notes"
            }
            inset
          />
          <ListItemText primary="Due:" secondary={todo.setDate} />
        </ListItem>
      ) : null}
    </>
  );
});

export default TodoListItem;
