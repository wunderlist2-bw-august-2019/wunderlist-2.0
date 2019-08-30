import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const EditTask = ({ status, todo, getTodos }) => {
  useEffect(() => {
    if (status) {
      getTodos();
    }
  }, [status])

  return (
    <Form className="ui form">
      <Field name="id" value={todo.id} hidden/>
      <div className="equal width fields">
        <div className="field">
          <div className="ui fluid input">
            <Field className="ui fluid input" type="input" label="Task" name="task" placeholder={todo.task || "Add Todo Here"} />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field type="input" label="Category" name="title" placeholder={todo.title || "Category"} />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field type="input" label="Due Date" name="setDate" placeholder={todo.setDate || "Due Date"} />
          </div>
        </div>
      </div>
      <div className="field">
        <Field component="textarea" label="Notes" name="notes" placeholder={todo.notes || "Notes"} rows="2" />
      </div>
      <Button type="submit">Update Task</Button>
    </Form>
  )
}

const formikForm = withFormik({
  mapPropsToValues({ task, title, setDate, todo }) {
    console.log('mapProps: todo: ', todo)
    return {
      id: todo.id,
      task: task,
      title: title,
      setDate: setDate,
      user_id: localStorage.getItem("user_id") 
    }
  },
  handleSubmit(values, { setStatus, props: { todo: { id }} }) {
    axios.put(`https://wunderlist-2.herokuapp.com/api/todos/${id}`, values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.error(err.response))
  }
})(EditTask);

export default formikForm;