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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  },
  mainForm: {
    paddingTop: 20,
    paddingBottom: 20,
    maxWidth: 450,
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: 24,
    marginRight: 24
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px 48px 48px"
   
  },
  avatar: {
    margin: 8,
    backgroundColor: "orange"
  },
  form: {
    width: "auto", // Fix IE 11 issue.
    marginTop: 8
  },
  submit: {
    marginTop: 24
  },
  submitLoader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname:"",
      email: "",
      password: "",
      showDialog: false,
      dialogTitle: "",
      dialogMessage: "",
      error: false,
      loading: false
    };
  }
  
  dialogHandler = () => {
    this.setState({showDialog: false});
  }


  buttonPressed = e => {
    this.setState({loading : true});
    const {fname,lname, email, password} = this.state;
    e.preventDefault();
  };

  render() {
    return (
      <div style={styles.main}>
        <main style={styles.mainForm}>
          <CssBaseline />
          <Paper style={styles.paper} elevation={24}>
            <Avatar style={styles.avatar}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form style={styles.form}>
              {/* first name */}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="fname">First Name</InputLabel>
                <Input
                  id="fname"
                  fname="fname"
                  autoFocus
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </FormControl>

              {/* last name*/}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Last Name</InputLabel>
                <Input
                  id="lname"
                  lname="lname"
                  autoFocus
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </FormControl>

              {/* Email Address */}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormControl>

              {/* Password */}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Passwrd</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormControl>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                style={styles.submit}
                
              > Sign Up </Button>
              <div style={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  style={{ marginTop: 20 }}
                  gutterBottom>
                
                 {"Already have an account ? "}
                  <Link style={{ textDecoration: "none" }} to="/">
                   Sign in
                  </Link>
                </Typography>
              </div>
            </form>
          </Paper>
        </main>
       
      </div>
    );
  }
}

export default SignUp;