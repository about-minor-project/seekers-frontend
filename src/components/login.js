import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory, Link } from "react-router-dom";
import userService from "../services/user";
import loginService from "../services/login";
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
import "./login.css";
import LockIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const history = useHistory();

  // already logged in? then throw him to profiles
  useEffect(() => {
    const loggedIn = window.localStorage.getItem("role");
    if (loggedIn) history.push("/profile");

    // console.log("loggedIn", loggedIn);
    if (loggedIn) {
      loggedIn === "user"
        ? history.push("/profile")
        : history.push("/dashboard");
    }
  }, []);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const Notification = ({ message }) => {
    if (message === null) return null;
    return (
      <div className="error">
        <p>{message}</p>
      </div>
    );
  };

  const Success = ({ message }) => {
    if (message === null) return null;
    return (
      <div className="success">
        <p>{message}</p>
      </div>
    );
  };

  const Error = ({ message }) => {
    if (message == null) return null;
    return (
      <div className="warning">
        <p>{message}</p>
      </div>
    );
  };

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

  const handleLogin = async (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      setErrorMessage("email and Password can't be empty");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else {
      try {
        const user = await loginService.login({
          email,
          password,
        });

        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        window.localStorage.setItem("email", user.email);
        window.localStorage.setItem("name", user.fname + " " + user.lname);
        window.localStorage.setItem("details", user.details);
        window.localStorage.setItem("role", user.role);
        setUser(user);
        // console.log("email", email);
        // console.log("password", password);
        setUsername("");
        setPassword("");
        setSuccessMessage(`Login Success, welcome ${user.name}`);

        userService.setToken(user.token);

        console.log("user", user);

        user.role === "user"
          ? history.push("/profile")
          : history.push("/Dashboard");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } catch (exception) {
        // console.log("fail dude no idea why");
        setErrorMessage("Wrong credentials");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const LoginForm = () => (
    <Paper style={styles.paper} elevation={20}>
      <CssBaseline />
      <Avatar style={styles.avatar}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login{" "}
      </Typography>
      <form onSubmit={handleLogin} className="login">
        <div>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              name="email"
            />
          </FormControl>
        </div>

        <div>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Password</InputLabel>
            <Input
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handlePasswordChange("password");
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              name="Password"
            />
          </FormControl>
        </div>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          style={styles.submit}
        >
          {" "}
          Sign in{" "}
        </Button>

        <div style={{ textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            gutterBottom
          >
            Don't have an account ?{" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              Register
            </Link>
          </Typography>
        </div>
      </form>
    </Paper>
  );

  return (
    <div>
      <>
        <Notification message={errorMessage} />
        <Success message={successMessage} />
        {/* <Error message={invalidNote} /> */}
        {LoginForm()}
        <br />
      </>
    </div>
  );
};

export default Login;
