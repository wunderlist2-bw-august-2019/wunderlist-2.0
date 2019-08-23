import React from 'react';
import { Grid, Segment, Header, Button, Message } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';


const Login = () => {
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

                        <div className='ui fluid input'>
                            <Field type='password' name='password' placeholder='Password' />
                        </div>
                        <Button>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    <Link to='/register'>New User? Click Here</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

const formikForm = withFormik({})(Login);

export default formikForm;