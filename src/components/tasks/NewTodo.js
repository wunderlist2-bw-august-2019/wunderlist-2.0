import React from 'react';
import { Form, Field, withFormik } from 'formik';

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
  }
})(NewTask);

export default formikForm;