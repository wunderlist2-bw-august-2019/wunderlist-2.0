import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';


const Login = () => {
    return (
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column>
                <Header as='h2' textAlign='center'>
                    Welcome to Wunderlist 2.0!
                </Header>
                <Form>
                    <div>
                        <Field type='username' name='username' placeholder='Username' />
                    </div>

                    <div>
                        <Field type='password' name='password' placeholder='Password' />
                    </div>
                    <Button>Login</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

const formikForm = withFormik({})(Login);

export default formikForm;