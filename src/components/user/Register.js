import React, { useEffect } from 'react';
import { Grid, Segment, Header, Button, Message } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const Register = ({ touched, errors, status, setToken, setWelcomeMessage, setUserID }) => {
    useEffect(() => {
        if (status) {
            console.log('status: ', status)
            setToken(status.token);
            setWelcomeMessage(status.message);
            setUserID(status.userID);
        }
    }, [status]);

    return (
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 500}}>
                <Header as='h2' textAlign='center'>
                    Welcome to Wunderlist 2.0!
                </Header>
                <Form>
                    <Segment stacked>
                        <div className='ui fluid input'>
                            <Field type='name' name='firstName' placeholder='First Name' />
                        </div>
                        {touched.firstName && errors.firstName && (<p className="error">{errors.firstName}</p>)}

                        <div className='ui fluid input'>
                            <Field type='name' name='lastName' placeholder='Last Name' />
                        </div>
                        {touched.lastName && errors.lastName && (<p className="error">{errors.lastName}</p>)}
                        
                        <div className='ui fluid input'>
                            <Field type='username' name='username' placeholder='Username' />
                        </div>
                        {touched.username && errors.username && (<p className="error">{errors.username}</p>)}

                        <div className='ui fluid input'>
                            <Field type='password' name='password' placeholder='Password' />
                        </div>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                        <Button type="submit" fluid>Create New Account</Button>
                    </Segment>
                </Form>
                <Message>
                    <Link to='/'>Log In</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

const formikForm = withFormik({
    mapPropsToValues({firstName, lastName, username, password}) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        username: Yup.string().required("Please enter a username"),
        password: Yup.string().required("Please enter a password")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios.post("https://wunderlist-2.herokuapp.com/api/auth/register", values)
            .then(res => {
                setStatus(res.data);
                resetForm();
            })
    }
})(Register);

export default formikForm;