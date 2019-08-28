import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const NewTask = props => {
  return (
    <Form className="ui form">
      <div className="equal width fields">
        <div className="field">
          <div className="ui fluid input">
            <Field className="ui fluid input" type="input" label="Task" name="task" placeholder="Add Todo Here" />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field type="input" label="Category" name="title" placeholder="Category" />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid input">
            <Field type="input" label="Due Date" name="setDate" placeholder="Due Date" />
          </div>
        </div>
      </div>
      <div className="field">
        <Field component="textarea" label="Notes" name="notes" placeholder="Notes" rows="2" />
      </div>
      <Button type="submit">Add Task</Button>
    </Form>
  )
}

const formikForm = withFormik({
  mapPropsToValues({ task, title, setDate }) {
    return {
      task: task || "",
      title: title || "",
      setDate: setDate || "",
      user_id: localStorage.getItem("user_id") 
    }
  },
  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('https://wunderlist-2.herokuapp.com/api/todos/', values)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }
})(NewTask);

export default formikForm;