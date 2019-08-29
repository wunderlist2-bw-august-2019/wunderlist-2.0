import React from 'react';
import { IconButton } from '@material-ui/core';

import { Modal } from 'semantic-ui-react';
import EditIcon from '@material-ui/icons/Edit';

const EditTodo = ({ status, getTodos }) => {
  return (
    <Modal trigger={
      <IconButton aria-label="Edit Todo" onClick={() => console.log('clicked')}>
        <EditIcon />      
      </IconButton>
    } centered="false">
    </Modal>
  )
}

export default EditTodo;