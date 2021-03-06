import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import detailsService from "../services/details";
import userService from "../services/user";
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
import Button from "@material-ui/core/Button";
import Loading from "../assets/loader/load.gif";

import "./profile.css";

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
  loadingContainer: {
    display: "grid",
    placeItems: "center",
    height: "90vh",
  },
  loader: {
    width: "3rem",
  },
}));

const Profile = (props) => {
  const dynamicId = props.match.params.user_id;

  const history = useHistory();

  const loggedIn = window.localStorage.getItem("loggedUser");
  !loggedIn && history.push("/");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const name = window.localStorage.getItem("name");
    setName(name);

    const email = window.localStorage.getItem("email");
    setEmail(email);

    fetchUserDetails();
  }, []);

  const localStorageDetails = window.localStorage.getItem("details");

  const fetchUserDetails = async () => {
    if (dynamicId) {
      const fetchedUser = await userService.getOne(dynamicId);
      setUser(fetchedUser);
      const details = await detailsService.getDetails(fetchedUser.details);
      setDetails(details);
    } else {
      const details = await detailsService.getDetails(localStorageDetails);
      setDetails(details);
    }

    setLoading(false);
  };

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div>
        <div>
          {!loading ? (
            <div className="details">
              <div className="container">
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
                    <ListItemText primary="Email" />
                  </ListItem>
                </Button>

                <ListItemText />
                <ListItem button>
                  <ListItemIcon>Headline : {details.headline}</ListItemIcon>
                  <ListItemText />
                </ListItem>

                <div className={classes.root}>
                  <List component="nav" className="social">
                    <Button href={details.website}>
                      <ListItem button>
                        <ListItemIcon>
                          <LanguageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Website" />
                      </ListItem>
                    </Button>

                    <Button href={details.github}>
                      <ListItem button>
                        <ListItemIcon>
                          <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                      </ListItem>
                    </Button>

                    <Button href={details.linkedin}>
                      <ListItem button>
                        <ListItemIcon>
                          <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="Linkedin" />
                      </ListItem>
                    </Button>

                    <Button href={details.resume}>
                      <ListItem button>
                        <ListItemIcon>
                          <InsertDriveFileIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
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
                  <ListItemIcon>
                    Current GPA : {details.currentGpa}
                  </ListItemIcon>
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
              </div>
            </div>
          ) : (
            <div className={classes.loadingContainer}>
              <img src={Loading} className={classes.loader} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
