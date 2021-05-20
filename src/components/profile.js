import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import detailsService from "../services/details";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, Select, MenuItem, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./profile.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, Typography } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  media: {
    height: 140,
  },
}));

const Updateprofile = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("loggedUser");
  !loggedIn && history.push("/");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const name = window.localStorage.getItem("name");
    setName(name);

    const email = window.localStorage.getItem("email");
    setEmail(email);

    const detailId = window.localStorage.getItem("details");
    const details = detailsService
      .getDetails(detailId)
      .then((res) => setDetails(res));
  }, []);

  const courses = [
    "select course",
    "Computer Science Engg.",
    "Information Technology",
    "Mechanical Engg.",
    "Electrical Engg.",
    "Electronics Engg.",
    "Automobile Engg.",
  ];
  const skillset = [
    "select skill",
    "C++",
    "Java",
    "Go",
    "Dart",
    "React Js",
    "Scala",
  ];

  const state = [
    "select state",
    "Madhya Pradesh",
    "Goa",
    "Andhra Pradesh",
    "Delhi",
    "Mumbai",
    "Shimla",
    "Jammu and Kashmir",
    "Maharashtra",
    "Assam",
    "Bangalore",
    "Gujarat",
  ];
  const cityy = [
    "select city",
    "Bhopal",
    "Raisen",
    "Amri",
    "Nagpur",
    "Jaipur",
    "Pune",
    "Habibganj",
    "Meerut",
    "Sonepur",
    "Kalyan",
    "Tiruvanthram",
  ];

  const classes = useStyles();
  const [imageFile, setImageFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [collegename, setClg] = useState("");
  const [schoolname, setSchl] = useState("");
  const [bio, setBio] = useState("");
  const [course, setCourse] = useState("");
  const [currentgpa, setGpa] = useState("");
  const [ssc, setSsc] = useState("");
  const [hsc, setHsc] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [skills, setSkills] = useState("");
  const [yearofgrad, setYog] = useState("");
  const [yearofpass, setYop] = useState("");
  const [dob, setDob] = useState("");
  const [linkedlink, setLinkedlink] = useState("");
  const [gitlink, setGitlink] = useState("");
  const [weblink, setWeblink] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting headline ${city}`);
  };

  return (
    <>
      <div>
        <ListItem button>
          <ListItemIcon>Name : {name.toUpperCase()}</ListItemIcon>{" "}
        </ListItem>
        <Button href={"mailto:" + email}>
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary='Email' />
          </ListItem>
        </Button>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography align='center' color='secondary' variant='h5'>
              Update Profile
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item x6>
                <TextField
                  required
                  name='collegename'
                  label='CollegeName'
                  value={collegename}
                  onChange={(e) => setClg(e.target.value)}
                  style={{ width: 300 }}
                  variant='outlined'
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  name='schoolname'
                  label='SchoolName'
                  variant='outlined'
                  value={schoolname}
                  onChange={(e) => setSchl(e.target.value)}
                  style={{ width: 300 }}
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  id='yearofgrad'
                  name='yearofgrad'
                  label='Year of Graduation'
                  value={yearofgrad}
                  onChange={(e) => setYog(e.target.value)}
                  style={{ width: 300 }}
                  type='date'
                  variant='outlined'
                  color='primary'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{" "}
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  id='yearofpass'
                  name='yearofpass'
                  label='Year of Passing'
                  type='date'
                  value={yearofpass}
                  onChange={(e) => setYop(e.target.value)}
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{" "}
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  id='dob'
                  name='dob'
                  label='Date of Birth'
                  type='date'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{" "}
              </Grid>
              <Grid item x6>
                <Select
                  required
                  label='Course'
                  name='course'
                  type='text'
                  id='course'
                  value={courses[0]}
                  onChange={(e) => setCourse(e.target.value)}
                  variant='outlined'
                  InputLabelProps={{
                    name: "course",
                    shrink: true,
                  }}
                  disableUnderline
                  style={{ width: 300 }}
                >
                  {courses.map((index) => (
                    <MenuItem value={index}>{index}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  type='decimal'
                  label='Current GPA'
                  name='currentgpa'
                  value={currentgpa}
                  onChange={(e) => setGpa(e.target.value)}
                  style={{ width: 300 }}
                  variant='outlined'
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  label='SSC percentage'
                  type='decimal'
                  id='sscper'
                  name='sscper'
                  value={ssc}
                  onChange={(e) => setSsc(e.target.value)}
                  style={{ width: 300 }}
                  variant='outlined'
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  id='hscper'
                  name='hscper'
                  type='decimal'
                  label='HSC percentage'
                  value={hsc}
                  onChange={(e) => setHsc(e.target.value)}
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>{" "}
              <Grid item x6>
                <Select
                  required
                  label='States'
                  name='states'
                  id='states'
                  defaultValue='Assam'
                  value={state[0]}
                  onChange={(e) => setStates(e.target.value)}
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disableUnderline
                  style={{ width: 300 }}
                >
                  {state.map((index) => (
                    <MenuItem value={index}>{index}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item x6>
                <Select
                  required
                  label='City'
                  name='city'
                  value={cityy[0]}
                  onChange={(e) => setCity(e.target.value)}
                  variant='outlined'
                  defaultValue='Bhopal'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disableUnderline
                  style={{ width: 300 }}
                >
                  {cityy.map((index) => (
                    <MenuItem value={index}>{index}</MenuItem>
                  ))}
                </Select>
              </Grid>{" "}
              <Grid item x6>
                <Select
                  required
                  name='skills'
                  value={skillset[0]}
                  onChange={(e) => setSkills(e.target.value)}
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disableUnderline
                  style={{ width: 300 }}
                >
                  {skillset.map((index) => (
                    <MenuItem value={index}>{index}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  name='weblink'
                  id='weblink'
                  type='url'
                  value={weblink}
                  onChange={(e) => setWeblink(e.target.value)}
                  label='Website link'
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  name='gitlink'
                  id='gitlink'
                  type='url'
                  value={gitlink}
                  onChange={(e) => setGitlink(e.target.value)}
                  label='Github link'
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextField
                  required
                  name='linkedlink'
                  id='linkedlink'
                  type='url'
                  value={linkedlink}
                  onChange={(e) => setLinkedlink(e.target.value)}
                  label='Linkedin link'
                  variant='outlined'
                  style={{ width: 300 }}
                  color='primary'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item x6>
                <TextareaAutosize
                  required
                  label='bio'
                  name='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  id='bio'
                  style={{ width: 295, height: 60 }}
                  rowsMax={4}
                  defaultValue='Bio'
                />
              </Grid>{" "}
              <Grid item x6>
                <Typography variant='h6' color='secondary'>
                  Upload Profile Picture
                </Typography>

                <input
                  type='file'
                  name='profilepic'
                  id='profilepic'
                  value={imageFile}
                  style={{ width: 295 }}
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </Grid>
              <Grid item x6>
                <Typography variant='h6' color='secondary'>
                  Upload Resume
                </Typography>{" "}
                <input
                  type='file'
                  name='resume'
                  id='resume'
                  style={{ width: 295 }}
                  value={resumeFile}
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
              </Grid>
              <Grid item x6>
                <Button
                  variant='contained'
                  color='secondary'
                  type='submit'
                  style={{ width: 100 }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

const check = (details) => {
  const havedetails = details;
  if (havedetails) {
    return (
      <Typography variant='h6' color='secondary'>
        profile up to date.
      </Typography>
    );
  } else
    return (
      <p>
        {" "}
        need to update
        {/*Updateprofile()*/}
      </p>
    );
};

const Profile = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("loggedUser");
  !loggedIn && history.push("/");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const name = window.localStorage.getItem("name");
    setName(name);

    const email = window.localStorage.getItem("email");
    setEmail(email);

    const detailId = window.localStorage.getItem("details");
    const details = detailsService
      .getDetails(detailId)
      .then((res) => setDetails(res));
  }, []);

  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div>
        <div>
          <div className='details'>
            <div className='container'>
              <div>
                <img src={details.image} />
              </div>
              <ListItem button>
                <ListItemIcon>Name : {name.toUpperCase()}</ListItemIcon>{" "}
              </ListItem>
              <Button href={"mailto:" + email}>
                <ListItem button>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary='Email' />
                </ListItem>
              </Button>

              <ListItemText />
              <ListItem button>
                <ListItemIcon>Headline : {details.headline}</ListItemIcon>
                <ListItemText />
              </ListItem>

              <div className={classes.root}>
                <List component='nav' className='social'>
                  <Button href={details.website}>
                    <ListItem button>
                      <ListItemIcon>
                        <LanguageIcon />
                      </ListItemIcon>
                      <ListItemText primary='Website' />
                    </ListItem>
                  </Button>

                  <Button href={details.github}>
                    <ListItem button>
                      <ListItemIcon>
                        <GitHubIcon />
                      </ListItemIcon>
                      <ListItemText primary='Github' />
                    </ListItem>
                  </Button>

                  <Button href={details.linkedin}>
                    <ListItem button>
                      <ListItemIcon>
                        <LinkedInIcon />
                      </ListItemIcon>
                      <ListItemText primary='Linkedin' />
                    </ListItem>
                  </Button>

                  <Button href={details.resume}>
                    <ListItem button>
                      <ListItemIcon>
                        <InsertDriveFileIcon />
                      </ListItemIcon>
                      <ListItemText primary='Resume' />
                    </ListItem>
                  </Button>
                </List>
              </div>
              <ListItem button>
                <ListItemIcon> College Name : {details.college}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon> School Name : {details.school}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  Year of Graduation : {details.yearOfGrad}
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  Year of Passing 12th : {details.yearOfPass}
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>Date Of Birth : {details.dob}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>Course : {details.course}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon> Current GPA : {details.currentGpa}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  Senior Secondary Percentage : {details.secondary}
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  Secondary: {details.seniorSecondary}
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>State : {details.state}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>City : {details.city}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>Skills : {details.skills}</ListItemIcon>
                <ListItemText />
              </ListItem>
              <br />
              {check(details.skills)}
              {/*Updateprofile()*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
