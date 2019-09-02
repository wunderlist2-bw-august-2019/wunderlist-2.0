import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: 100,
    marginTop: 10
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 10, 10),
    width: 1000,
    height: 300
  }
}));

const EditTask = ({ status, todo, getTodos }) => {
  const classes = useStyles();
  useEffect(() => {
    if (status) {
      getTodos();
    }
  }, [status]);

  return (
    <Form className="ui form">
      <Field name="id" value={todo.id} hidden />
      <div className="equal width fields">
        <div className="field">
          <div className="ui fluid input">
            <Field
              className="ui fluid input"
              type="input"
              label="Task"
              name="task"
              placeholder={todo.task || "Add Todo Here"}
            />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field
              type="input"
              label="Category"
              name="title"
              placeholder={todo.title || "Category"}
            />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field
              type="date"
              label="Due Date"
              name="setDate"
            />
          </div>
        </div>
      </div>
      <div className="field">
        <Field
          component="textarea"
          label="Notes"
          name="notes"
          placeholder={todo.notes || "Notes"}
          rows="2"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Update
      </Button>
    </Form>
  );
};

const formikForm = withFormik({
  mapPropsToValues({ task, title, setDate, todo }) {
    return {
      id: todo.id,
      task: task,
      title: title,
      setDate: setDate,
      user_id: localStorage.getItem("user_id")
    };
  },
  handleSubmit(
    values,
    {
      setStatus,
      props: {
        todo: { id }
      }
    }
  ) {
    axios
      .put(`https://wunderlist-2.herokuapp.com/api/todos/${id}`, values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.error(err.response));
  }
})(EditTask);

export default formikForm;
