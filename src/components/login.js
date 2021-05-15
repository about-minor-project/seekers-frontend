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
import LockIcon from "@material-ui/icons/LockOutlined";
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
class Login extends React.Component {
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
      input["email"] = "admin";
      input["password"] = "admin";
      this.setState({ input: input });
      alert("You are Logged in successfully");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

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
                <LockIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Login{" "}
              </Typography>
              <form onSubmit={this.handleSubmit} style={styles.form}>
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
                  component={Link}
                  to='/Dashboard'
                  style={styles.submit}
                >
                  {" "}
                  Sign in{" "}
                </Button>
                <div style={{ textAlign: "center" }}>
                  <Typography
                    variant='subtitle1'
                    style={{ marginTop: 20 }}
                    gutterBottom
                  >
                    Don't have an account ?{" "}
                    <Link style={{ textDecoration: "none" }} to='/register'>
                      Register
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

export default Login;

// import React, { useState, useEffect } from "react";
// // import noteService from "../services/noteService";
// // import loginService from "../services/login";
// import "./login.css";

// const Login = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("");
//   const [showAll, setShowAll] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [invalidNote, setInvalidNote] = useState(null);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   noteService.getAll().then((data) => setNotes(data));
//   // }, []);

//   // useEffect(() => {
//   //   const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
//   //   if (loggedUserJSON) {
//   //     const user = JSON.parse(loggedUserJSON);
//   //     setUser(user);
//   //     noteService.setToken(user.token);
//   //   }
//   // }, []);

//   // const addNote = (event) => {
//   //   event.preventDefault();

//   //   if (newNote === "") {
//   //     setErrorMessage("Note can't be empty");
//   //     setTimeout(() => {
//   //       setErrorMessage(null);
//   //     }, 5000);
//   //   } else if (newNote.length < 6) {
//   //     setInvalidNote(`Note content can't be less than 5 characters`);
//   //     setTimeout(() => {
//   //       setInvalidNote(null);
//   //     }, 5000);
//   //   } else {
//   //     const noteObj = {
//   //       content: newNote,
//   //       date: new Date().toISOString(),
//   //       important: Math.random() < 0.5,
//   //       id: notes.length + 1,
//   //     };
//   //     noteService
//   //       .create(noteObj)
//   //       .then((data) => {
//   //         setNotes(notes.concat(data));
//   //         setNewNote("");
//   //         setSuccessMessage(`Note : "${newNote}" successfully added`);
//   //         setTimeout(() => {
//   //           setSuccessMessage(null);
//   //         }, 5000);
//   //       })
//   //       .catch((error) => {
//   //         console.log("error while adding note", error.message);
//   //       });
//   //   }
//   // };

//   // const handleNewNote = (event) => {
//   //   setNewNote(event.target.value);
//   // };

//   // const notesToShow = showAll ? notes : notes.filter((note) => note.important);

//   // const toggleImportanceOf = (id) => {
//   //   const note = notes.find((n) => n.id === id);
//   //   const changedNote = { ...note, important: !note.important };

//   //   noteService
//   //     .update(id, changedNote)
//   //     .then((data) => setNotes(notes.map((note) => (note.id !== id ? note : data))))
//   //     .catch((error) => {
//   //       setErrorMessage(`the Note ${note.content} was already deleted from the server`);

//   //       setTimeout(() => {
//   //         setErrorMessage(null);
//   //       }, 5000);

//   //       setNotes(notes.filter((n) => n.id !== id));
//   //     });
//   // };

//   // const Note = ({ note, toggleImportance }) => {
//   //   const label = note.important ? "mark not important" : "mark important";
//   //   return (
//   //     <p>
//   //       <li>
//   //         {note.content}
//   //         &nbsp;&nbsp;<button onClick={toggleImportance}>{label}</button>
//   //       </li>
//   //     </p>
//   //   );
//   // };

//   const Notification = ({ message }) => {
//     if (message === null) return null;
//     return (
//       <div className="error">
//         <p>{message}</p>
//       </div>
//     );
//   };

//   const Success = ({ message }) => {
//     if (message === null) return null;
//     return (
//       <div className="success">
//         <p>{message}</p>
//       </div>
//     );
//   };

//   const Error = ({ message }) => {
//     if (message == null) return null;
//     return (
//       <div className="warning">
//         <p>{message}</p>
//       </div>
//     );
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (username === "" || password === "") {
//       setErrorMessage("Username and Password can't be empty");
//       setTimeout(() => {
//         setErrorMessage(null);
//       }, 5000);
//     } else {
//       try {
//         // const user = await loginService.login({
//         //   username,
//         //   password,
//         // });

//         window.localStorage.setItem("loggedUser", JSON.stringify(user));

//         setUser(user);
//         setUsername("");
//         setPassword("");
//         setSuccessMessage(`Login Success, welcome ${user.name}`);

//         // noteService.setToken(user.token);

//         console.log("user", user);
//         setTimeout(() => {
//           setSuccessMessage(null);
//         }, 5000);
//       } catch (exception) {
//         setErrorMessage("Wrong credentials");
//         setTimeout(() => {
//           setErrorMessage(null);
//         }, 5000);
//       }
//     }
//   };

//   const handleLogout = () => {
//     window.localStorage.removeItem("loggedNoteAppUser");
//     setUser(null)
//     setSuccessMessage('Logged out successfully')
//      setTimeout(() => {
//        setSuccessMessage(null);
//      }, 3000);
//   };
//   const Logout = () => <button onClick={handleLogout}>Logout</button>;

//   const LoginForm = () => (
//     <form onSubmit={handleLogin} className="login">
//       {/* <h2>Login</h2> */}
//       <div>
//         Username &nbsp; &nbsp;
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           name="Username"
//         />
//       </div>
//       <br />
//       <div>
//         Password &nbsp;&nbsp;&nbsp;
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           name="Password"
//         />
//       </div>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );

//   // const NoteForm = () => (
//   //   <form onSubmit={addNote}>
//   // <input value={newNote} onChange={handleNewNote} /> 
//   //     <button>save</button>
//   //   </form>
//   // );
//   return (
//     <div>
//       <>
//         <h1>Login</h1>
       
//         <Notification message={errorMessage} />
//         <Success message={successMessage} />
//         <Error message={invalidNote} />

//         {user === null ? (
//           LoginForm()
//         ) : (
//           <div>
//             <h3>
//                 Logged in as {user.name} {<Logout/>}
//             </h3> 
//             {/* {NoteForm()} */}
//           </div>
//         )}
//         <br />
//         {/* <button onClick={() => setShowAll(!showAll)}>show {showAll ? "important" : "All"}</button> */}
//         {/* <ul>
//           {notesToShow.map((note, i) => (
//             <Note key={i} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
//           ))}
//         </ul> */}
//       </>
//     </div>
//   );
// };

// export default Login;