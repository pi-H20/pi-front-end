import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constant/server';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
      // Assume we have a token that we should save to LS
      localStorage.setItem('serverToken', response.data.token.toString());
      this.props.setEmail(this.state.email);
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR when submitting signup form', err);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect push to="/profile" />);
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
            Signup As New User
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>

            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} onChange={this.handleEmailChange}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Name'
                type='text'
                value={this.state.name} 
                onChange={this.handleNameChange}
              />
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
                Sign Up Now
              </Button>
            </Segment>

          </Form>
        </Grid.Column>
      </Grid>
      </div>






        // <div className = 'signupDiv'>
        //   <h2>Signup as a new user</h2>
        //   <form  onSubmit={this.handleSubmit}>
        //     <div>
        //     <label><b>Name</b></label>
        //       <input name="Name" value={this.state.name} onChange={this.handleNameChange} />
        //     </div>
        //     <div>
        //     <label><b>Email Address</b></label>
        //       <input name="Email" value={this.state.email} onChange={this.handleEmailChange} />
        //     </div>
        //     <div>
        //     <label><b>Password</b></label>
        //       <input name="Password" type="Password" value={this.state.password} onChange={this.handlePasswordChange} />
        //     </div>
        //       <button>Sign me up!</button>
        //   </form>
        // </div>
      );
  }
}

export default Signup;
