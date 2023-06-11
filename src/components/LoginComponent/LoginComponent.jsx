
import React, { Component } from 'react'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       
    }
  }
  emailHandler = event => {
    this.setState({
      email:event.target.value
    })
  }
  passwordHandler = event => {
    this.setState({
      password:event.target.value
    })
  }

  formSubmitHandler = event => {
    event.preventDefault();
    console.log(
      this.state.email,
      this.state.password
    );
    fetch(`http://localhost:3500/api/v1/login`,
    {
      method : `POST`,
      crossDomain : true,
      headers: {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body : JSON.stringify({
    
      email:this.state.email,
      password:this.state.password
      })
    }
    )
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      console.log(data.message)
      alert(data.message)
    })
  }
  render() {
    const {email,password} = this.state
    return (
      <form onSubmit={this.formSubmitHandler}>
        <h3>Login</h3>
        <div className='mb-3'>
          <label>Email</label>
          <input
          type='email'
          className='form-control'
          placeholder='Enter your email'
          required
          value={email}
          onChange={this.emailHandler}
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
          type='password'
          className='form-control'
          placeholder='Enter Your Password'
          required
          value={password}
          onChange={this.passwordHandler}
          />
        </div>
        <div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </div>
        <p className='forgot-password text-right'>
          Create account, <a href='/signup'>Sign-up here?</a>
        </p>
      </form>
    )
  }
}

export default LoginComponent

