import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constant/server';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response => {
      localStorage.setItem('serverToken', response.data.token.toString());
      this.props.setEmail(this.state.email);
      this.props.updateUser();
      
    })
    .catch(err => {
      console.log(`Error logging in.`, err);
    });
  }



  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
      <div className='login-form componentDiv'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'  textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
    
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} onChange={this.handleEmailChange}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password} 
                onChange={this.handlePasswordChange}
              />
    
              <Button color='teal' fluid size='large' name="action">
                Login
              </Button>
            </Segment>

          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
      );
  }
}

export default Login;
