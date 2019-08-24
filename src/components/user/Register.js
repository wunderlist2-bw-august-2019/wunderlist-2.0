import React from 'react';
import { Grid, Segment, Header, Button, Message } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const Register = () => {
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

                        <div className='ui fluid input'>
                            <Field type='name' name='lastName' placeholder='Last Name' />
                        </div>
                        
                        <div className='ui fluid input'>
                            <Field type='username' name='username' placeholder='Username' />
                        </div>

                        <div className='ui fluid input'>
                            <Field type='password' name='password' placeholder='Password' />
                        </div>
                        <Button fluid>Create New Account</Button>
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
    })
})(Register);

export default formikForm;