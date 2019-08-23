import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { Form, Field, withFormik } from 'formik';


const Register = () => {
    return (
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column>
                <Header as='h2' textAlign='center'>
                    Welcome to Wunderlist 2.0!
                </Header>
                <Form>
                    <div>
                        <Field type='name' name='firstName' placeholder='First Name' />
                    </div>

                    <div>
                        <Field type='name' name='lastName' placeholder='Last Name' />
                    </div>
                    <div>
                        <Field type='username' name='username' placeholder='Username' />
                    </div>

                    <div>
                        <Field type='password' name='password' placeholder='Password' />
                    </div>
                    <Button>Create New Account</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

const formikForm = withFormik({})(Register);

export default formikForm;