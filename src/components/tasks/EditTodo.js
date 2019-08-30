import React from 'react';
import { IconButton } from '@material-ui/core';

import { Modal } from 'semantic-ui-react';
import EditIcon from '@material-ui/icons/Edit';

import EditTodoForm from './EditTodoForm';

const EditTodo = ({ todo, getTodos }) => {
  console.log('EditTodo: todo: ', todo)
  return (
    <Modal trigger={
      <IconButton aria-label="Edit Todo">
        <EditIcon />      
      </IconButton>}
      centered="false"
    >
      <Modal.Header>Edit/Update Task</Modal.Header>
      <Modal.Content>
        <EditTodoForm todo={todo} getTodos={getTodos} />
      </Modal.Content>
    </Modal>
  )
}

export default EditTodo;