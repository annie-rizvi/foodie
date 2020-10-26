import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default class SignIn extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            username: "",
            password: "",
            wrong: false
        }
        
    }

    validate()
    {
        console.log(this.state.username);
        this.setState({wrong: true});
    }

    handleUsernameChange = event =>{
        this.setState({ username: event.target.value });
    }
    handlePasswordChange = event =>{
        this.setState({ password: event.target.value });
    }

    goToSignUp()
    {
        this.props.updateCurrentComponent("signup");
    }

    render()
    {
        return(
            <div>
                <Container component="main" maxWidth="xs">
                    <div>
                        <Avatar></Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            error = {this.state.wrong}
                            value = {this.state.username}
                            onChange = {this.handleUsernameChange.bind(this)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type = "password"
                            name="password"
                            label="Password"
                            id="password"
                            autoFocus
                            error = {this.state.wrong}
                            value = {this.state.password}
                            onChange = {this.handlePasswordChange.bind(this)}/>
                        <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick = {this.validate.bind(this)}>
                            Sign In
                        </Button>
                        <h5>First Time User?</h5>
                        <Button
                            fullWidth
                            variant = "contained"
                            color = "primary"
                            onClick = {this.goToSignUp.bind(this)}>
                            Sign Up
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }
}
