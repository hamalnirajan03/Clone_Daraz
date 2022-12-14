import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/system';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();

    const [values, setvalues] = useState({
        email: "",
        pass: "",
        birthday: "",
        gender: "",
        fullName: ""

    });

    const handleSubmission = () => {
        console.log(values);

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                const user = res.user;
                console.log(user);
                await updateProfile(user,{
                    displayName: values.fullName,
                });
                navigate("/login");


            })
            .catch((err) => console.log("error message", err));
    };

    return (
        <Wrapper>
            <div className="login">
                <div className="login-form">
                    <div className="title-section">
                        <div className="large">
                            <h2>Create your Daraz Account</h2>
                        </div>



                    </div>

                    <div className="signup-section grid grid-two-column">
                        <div className="section-1">


                            <Stack spacing={1}>
                                <p>email*</p>
                                <input
                                    type="email"
                                    placeholder="Please enter your email"
                                    onChange={(event) =>
                                        setvalues((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                />

                                <p>Password*</p>
                                <input
                                    type="password"
                                    placeholder="Minimum 6 charactera with a number and a letter"
                                    onChange={(event) =>
                                        setvalues((prev) => ({ ...prev, pass: event.target.value }))
                                    }
                                />

                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: 359 }}
                                    onChange={(event) =>
                                        setvalues((prev) => ({ ...prev, birthday: event.target.value }))
                                    }


                                />

                                {/* <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={list}
                                    sx={{ width: 359 }}
                                    renderInput={(params) => <TextField {...params} label="Gender" />}
                                    onChange={(event) =>
                                        setvalues((prev) => ({ ...prev, gender: event.target.value }))
                                    }
                                /> */}
                            </Stack>


                        </div>

                        <Stack className="section-2" spacing={1}>
                            <p>Full name*</p>
                            <input
                                type="text"
                                placeholder="Enter your first and last name"
                                onChange={(event) =>
                                    setvalues((prev) => ({ ...prev, fullName: event.target.value }))
                                }
                            />
                            <Button onClick={handleSubmission} sx={{ width: 360 }} className="button" variant="contained" >Sign Up</Button><br /><br />
                            <Button sx={{ width: 360 }} variant="outlined">Sign up with Email</Button>

                            <Button sx={{ width: 360 }} className="button" variant="contained" color="secondary" startIcon={<FacebookIcon />}>Facebook </Button>
                            <Button sx={{ width: 360 }} className="button" variant="contained" startIcon={<GoogleIcon />} >Google</Button>

                        </Stack>
                    </div>


                </div>
            </div>
        </Wrapper>
    )
};

const list = [
    {
        label: 'Male'
    },
    {
        label: 'Female'
    }
];
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

    .signup-section{
        width: 60rem;
        height: 21rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        .sub-login{

          input{
            height: 30px;
            width: 350px;
          }
        }

        .login-button{
          padding-left: 25px;

          .button{
            width: 300px;
          
          }
        }

        
    }
    
  }
`;

export default Signup;