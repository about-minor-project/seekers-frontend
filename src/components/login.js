import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import userService from "../services/user";
import loginService from "../services/login";
import "./login.css";

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
   if(loggedIn)
   history.push("/profile")
 
   console.log("loggedIn", loggedIn)
    if(loggedIn) { 
   loggedIn === "user"
   ? history.push("/profile")
   : history.push("/dashboard");
   }  
  }, [])
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

        console.log("user is here", user);

        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        window.localStorage.setItem("email", user.email);
        window.localStorage.setItem("name", user.fname + " " + user.lname);
        window.localStorage.setItem("details", user.details);
        window.localStorage.setItem("role", user.role);
        setUser(user);
        console.log("email", email);
        console.log("password", password);
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
    <form onSubmit={handleLogin} className="login">
      <div>
        email &nbsp; &nbsp;
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="email"
        />
      </div>
      <br />
      <div>
        Password &nbsp;&nbsp;&nbsp;
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="Password"
        />
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  );

  return (
    <div>
      <>
        <h1>Login</h1>

        <Notification message={errorMessage} />
        <Success message={successMessage} />
        {/* <Error message={invalidNote} /> */}
        {LoginForm()}
        {console.log("user ", user)}
        <br />
      </>
    </div>
  );
};

export default Login;

// import React, { Component } from "react";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   FormControl,
//   Input,
//   InputLabel,
//   Paper,
//   Typography,
// } from "@material-ui/core";
// import LockIcon from "@material-ui/icons/LockOutlined";
// import { Link } from "react-router-dom";

// const styles = {
//   main: {
//     backgroundColor: "white",
//     minHeight: "90vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",

//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     position: "relative",
//   },
//   mainForm: {
//     paddingTop: 20,
//     paddingBottom: 20,
//     maxWidth: 450,
//     width: "auto",
//     display: "block",
//     marginLeft: 24,
//     marginRight: 24,
//   },
//   paper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "48px 48px 48px",
//   },
//   avatar: {
//     margin: 8,
//     backgroundColor: "orange",
//   },
//   form: {
//     width: "auto",
//     marginTop: 8,
//   },
//   submit: {
//     marginTop: 24,
//   },
//   submitLoader: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     marginTop: -12,
//     marginLeft: -12,
//   },
//   danger: {
//     fontSize: 10,
//     color: "red",
//   },
// };
// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {},
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;

//     this.setState({
//       input,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     if (this.validate()) {
//       console.log(this.state);

//       let input = {};
//       input["email"] = "admin";
//       input["password"] = "admin";
//       this.setState({ input: input });
//       alert("You are Logged in successfully");
//     }
//   }

//   validate() {
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;

//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email Address.";
//     }

//     if (typeof input["email"] !== "undefined") {
//       var pattern = new RegExp(
//         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
//       );
//       if (!pattern.test(input["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }

//     if (!input["password"]) {
//       isValid = false;
//       errors["password"] = "Please enter your password.";
//     }

//     this.setState({
//       errors: errors,
//     });

//     return isValid;
//   }

//   render() {
//     return (
//       <div>
//         <div style={styles.main}>
//           <main style={styles.mainForm}>
//             <CssBaseline />
//             <Paper style={styles.paper} elevation={20}>
//               <Avatar style={styles.avatar}>
//                 <LockIcon />
//               </Avatar>
//               <Typography component='h1' variant='h5'>
//                 Login{" "}
//               </Typography>
//               <form onSubmit={this.handleSubmit} style={styles.form}>
//                 <FormControl margin='normal' required fullWidth>
//                   <InputLabel htmlFor='email'>Email</InputLabel>
//                   <Input
//                     type='text'
//                     name='email'
//                     value={this.state.input.email}
//                     onChange={this.handleChange}
//                     autoFocus
//                     id='email'
//                   />
//                   <div className='text-danger' style={styles.danger}>
//                     {this.state.errors.email}
//                   </div>
//                 </FormControl>

//                 <FormControl margin='normal' required fullWidth>
//                   <InputLabel htmlFor='password'>Password</InputLabel>
//                   <Input
//                     type='password'
//                     name='password'
//                     value={this.state.input.password}
//                     onChange={this.handleChange}
//                     autoFocus
//                     id='password'
//                   />
//                   <div className='text-danger' style={styles.danger}>
//                     {this.state.errors.password}
//                   </div>
//                 </FormControl>
//                 <Button
//                   fullWidth
//                   variant='contained'
//                   color='primary'
//                   value='submit'
//                   type='submit'
//                   component={Link}
//                   to='/Dashboard'
//                   style={styles.submit}
//                 >
//                   {" "}
//                   Sign in{" "}
//                 </Button>
//                 <div style={{ textAlign: "center" }}>
//                   <Typography
//                     variant='subtitle1'
//                     style={{ marginTop: 20 }}
//                     gutterBottom
//                   >
//                     Don't have an account ?{" "}
//                     <Link style={{ textDecoration: "none" }} to='/register'>
//                       Register
//                     </Link>
//                   </Typography>
//                 </div>
//               </form>
//             </Paper>
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
