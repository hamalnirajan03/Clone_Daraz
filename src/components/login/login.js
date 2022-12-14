import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const login = () => {
  return (
    <Wrapper>
      <div className="login">
        <div className="login-form">
          <div className="title-section">
            <div className="large">
              <h2>Welcome to Daraz! Please login</h2>
            </div>

            <div className="small">
              <p>New member? Register here.</p>
            </div>

          </div>

          <div className="login-section">
            <div className="sub-login">
              <p>Phone Number or Email*</p>
              <input type="text" placeholder="Please enter your Phone Number or Email" />

              <p>Password*</p>
              <input type="password" placeholder="Please enter your password" />

              <p>Forgot Password?</p>
            </div>

            <div className="login-button">
              <Button className="button" variant="contained" >Login</Button><br /><br />
              <Button className="button" variant="contained" color="secondary"  startIcon={<FacebookIcon />}>Facebook </Button><br /><br />
              <Button className="button" variant="contained" startIcon={<GoogleIcon />} >Google</Button>

            </div>
          </div>


        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .login{
    width: 100%;
    height: 25rem;
    background-color: #EAE6E5;
    
    
    .login-form{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .login-section{
        width: 50rem;
        height: 16rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        

        .login-button{
          padding-left: 25px;

          
        }

        
    }
  }
`;

export default login;