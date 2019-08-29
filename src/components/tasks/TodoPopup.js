import React, { useState, memo, useEffect } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NewTodo from './NewTodo';
import Button from '@material-ui/core/Button';
import Todo from './Todo';


const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(5,10, 10),
      width: 1000,
      height: 300,
    },
  }));
  
  export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    const [todos, setTodos] = useState([]);
  
    const getTodos = () => {
      axios.get('https://wunderlist-2.herokuapp.com/api/todos/')
        .then(res => {
          setTodos(res.data.filter(todo => `${todo.user_id}` === localStorage.getItem("user_id")));
        })
    }
  
    useEffect(() => {
      getTodos();
    }, [])

    
    return (
      <div>
      <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={handleOpen}>
      <AddIcon />
    </Fab>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
            <NewTodo getTodos={getTodos} />
            <Button  onClick={handleClose} variant="contained" color="secondary" className={classes.button}>
            Cancel
          </Button>
            </div>
           
          </Fade>
          
        </Modal>
      </div>
    );
  }