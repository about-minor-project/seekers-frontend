import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const styles = {
  main: {
    backgroundColor: "white",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  mainForm: {
    paddingTop: 20,
    paddingBottom: 20,
    maxWidth: 450,
    width: "auto",
    display: "block",
    marginLeft: 24,
    marginRight: 24,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px 48px 48px",
  },
  avatar: {
    margin: 8,
    backgroundColor: "orange",
  },
  form: {
    width: "auto",
    marginTop: 8,
  },
  submit: {
    marginTop: 24,
  },
  submitLoader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  danger: {
    fontSize: 10,
    color: "red",
  },
};
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["fname"] = "";
      input["lname"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });

      alert("Your Form is submited");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["fname"]) {
      isValid = false;
      errors["fname"] = "Please enter your name.";
    }
    if (!input["lname"]) {
      isValid = false;
      errors["lname"] = "Please enter your name.";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
    return (
      <div>
        <div style={styles.main}>
          <main style={styles.mainForm}>
            <CssBaseline />
            <Paper style={styles.paper} elevation={20}>
              <Avatar style={styles.avatar}>
                <PersonIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Register{" "}
              </Typography>
              <form onSubmit={this.handleSubmit} style={styles.form}>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='fname'>First Name</InputLabel>
                  <Input
                    type='text'
                    name='fname'
                    value={this.state.input.fname}
                    onChange={this.handleChange}
                    autoFocus
                    id='fname'
                  />
                  <div className='text-danger' style={styles.danger}>
                    {this.state.errors.name}
                  </div>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='lname'>Last Name</InputLabel>
                  <Input
                    type='text'
                    name='lname'
                    value={this.state.input.lname}
                    onChange={this.handleChange}
                    autoFocus
                    id='lname'
                  />
                  <div className='text-danger' style={styles.danger}>
                    {this.state.errors.name}
                  </div>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <Input
                    type='text'
                    name='email'
                    value={this.state.input.email}
                    onChange={this.handleChange}
                    autoFocus
                    id='email'
                  />
                  <div className='text-danger' style={styles.danger}>
                    {this.state.errors.email}
                  </div>
                </FormControl>

                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <Input
                    type='password'
                    name='password'
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    autoFocus
                    id='password'
                  />

                  <div className='text-danger' style={styles.danger}>
                    {this.state.errors.password}
                  </div>
                </FormControl>
                <Button
                  fullWidth
                  variant='contained'
                  color='primary'
                  value='submit'
                  type='submit'
                  style={styles.submit}
                >
                  {" "}
                  Sign Up{" "}
                </Button>
                <div style={{ textAlign: "center" }}>
                  <Typography
                    variant='subtitle1'
                    style={{ marginTop: 20 }}
                    gutterBottom
                  >
                    {"Already have an account ? "}
                    <Link style={{ textDecoration: "none" }} to='/'>
                      Sign in
                    </Link>
                  </Typography>
                </div>
              </form>
            </Paper>
          </main>
        </div>
      </div>
    );
  }
}

export default SignUp;
