import React from 'react';
import { Grid, Segment, Header, Button, Message } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const Login = ({ touched, errors }) => {
    return (
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 500}}>
                <Header as='h1' textAlign='center'>
                    Welcome to Wunderlist 2.0!
                </Header>
                <Form>
                    <Segment stacked>
                        <div className='ui fluid input'>
                            <Field type='username' name='username' placeholder='Username' />
                        </div>
                        {touched.username && errors.username && (<p className="error">{errors.username}</p>)}

                        <div className='ui fluid input'>
                            <Field type='password' name='password' placeholder='Password' />
                        </div>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                        
                        <Button type="submit" fluid>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    <Link to='/register'>New User? Click Here</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

const formikForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Enter your username"),
        password: Yup.string().required("Enter your password")
    })
})(Login);

export default formikForm;