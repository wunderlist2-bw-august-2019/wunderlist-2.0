import React, { useEffect } from "react";
import { Grid, Segment, Header, Button, Message } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Login = ({
  touched,
  errors,
  status,
  setToken,
  setWelcomeMessage,
  setUserID
}) => {
  useEffect(() => {
    if (status) {
      setToken(status.token);
      setWelcomeMessage(status.message);
      setUserID(status.userID);
    }
  }, [status]);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h1" textAlign="center">
          Welcome to Wunderlist 2.0!
        </Header>
        <Form>
          <Segment stacked>
            <div className="ui fluid input">
              <Field type="username" name="username" placeholder="Username" />
            </div>
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

            <div className="ui fluid input">
              <Field type="password" name="password" placeholder="Password" />
            </div>
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

            <Button type="submit" fluid>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/register">New User? Click Here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

const formikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://wunderlist-2.herokuapp.com/api/auth/login", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err));
  }
})(Login);

export default formikForm;
