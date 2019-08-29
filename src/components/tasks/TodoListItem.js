import React, { memo } from "react";
import axios from 'axios';

import {
  ListItem,
  ListSubheader,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = memo(props => {
  const deleteNote = () => {
    axios.delete(`https://wunderlist-2.herokuapp.com/api/todos/${props.id}`, { id: props.id })
      .then(res => {
        props.getTodos();
        alert(res.data.message);
      })
      .catch(err => console.error(err));
  }

  return (<ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.task} />
    <ListSubheader>{props.title}</ListSubheader>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={deleteNote}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>)
});

export default TodoListItem;
