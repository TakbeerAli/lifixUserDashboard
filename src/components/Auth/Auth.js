import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
// import { GoogleLogin } from "react-google-login";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { signin, signup } from "../../reduxStore/actions/auth";
import Icon from "./icon";
import Input from "./Input";
import useStyle from "./style";
import { createMuiTheme } from '@material-ui/core/styles';



const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const classes = useStyle();
  const [isSignup, setisSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData ] = useState(initialState);
  // const dispatch  = useDispatch();
  // const history = useHistory();

  const handleSwitch = () => {
    setisSignup((prevSignup) => !prevSignup);
    setShowPassword(false);
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isSignup){
    //   dispatch(signup(formData,history));
    // } else {
    //   dispatch(signin(formData, history));
    // }
  };

  const handleChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value });
  };

 

 

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Grid container justify="flex-start">
              <Grid item>
              <Typography style={{ fontWeight: 500 }} justify="flex-end" variant="h6">{isSignup ? "Sign Up" : "Sign in to continue"}</Typography>
              
            
              </Grid>
            </Grid>
        
       

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}

            {isSignup && (
              <Typography>I agree on the terms</Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
             style={{   backgroundColor: "#007AFF",color:"white"}}
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
         

            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={handleSwitch} style={{textTransform: 'none'}}>
                  {" "}
                  {isSignup ? "Already have an account? Sign in" : " Do not have an account? Sign up"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
