import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import noticeService from "../services/notice";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Alert, AlertTitle } from "@material-ui/lab";
import Loader from "../assets/loader/loading.gif";
import { useHistory } from "react-router-dom";

const Announcement = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("loggedUser");
  !loggedIn && history.push("/");

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    alerts: {
      margin: theme.spacing(3),
      alignItems: "center",
      borderRadius: "1rem",
      maxWidth: "80%",
    },
    header: {
      display: "block",
      margin: theme.spacing(5),
      textAlign: "center",
    },
    form: {
      display: "table",
      margin: "0 auto",
    },
    alertWrapper: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    inputContainer: {
      // display: "flex",
    },
    noticeInput: {
      padding: ".6rem",
      width: "35rem",
      marginRight: "1rem",
    },
    success: {
      maxWidth: "90%",
      margin: "0 auto",
    },
    warning: {
      maxWidth: "90%",
      margin: "0 auto",
    },
    alert: {
      margin: "0 auto",
      width: "90%",
    },
    margin: {
      margin: "1rem",
      padding: "1.2rem",
    },
    loader: {
      display: "table",
      margin: "0 auto",
    },
    loaderImage: {
      width: "5rem",
    },
    loaderContainer: {
      marginTop: "5rem",
    },
    button: {
      position: "absolute",
      right: "6rem",
    },
    publishedDate: {
      position: "absolute",
      right: "6rem",
    },
    alertMessage: {
      width: "80%",
    },
  }));

  const [notices, setNotices] = useState([]);
  const [role, setRole] = useState([]);
  const [newNotice, setNewNotice] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const role = window.localStorage.getItem("role");
    setRole(role);
    noticeService.getAll().then((data) => {
      setNotices(data);
      setLoading(false);
    });
  }, []);
  const classes = useStyles();

  const Success = ({ message }) => {
    if (message === null) return null;
    return (
      <div className={classes.success}>
        <Alert severity="success" className={classes.alert}>
          <AlertTitle>Success</AlertTitle>
          <p>{message}</p>
        </Alert>
      </div>
    );
  };

  const Error = ({ message }) => {
    if (message == null) return null;
    return (
      <div className={classes.warning}>
        <Alert severity="error" className={classes.alert}>
          <AlertTitle>Error While Publishing the Notice</AlertTitle>
          <p>{message}</p>
        </Alert>
      </div>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("hello", newNotice);
    const notice = newNotice;
    if (notice.length >= 10) {
      try {
        const savedNotice = await noticeService.create({
          notice,
        });
        // console.log("savedNotice", savedNotice);
        setNotices(notices.concat(savedNotice));
        setNewNotice("");
        setSuccessMessage(`Notice "${notice}" Added Successfully`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } catch (error) {
        setErrorMessage("There was an error while posting the notice");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    } else {
      setErrorMessage(
        "Please provide a valid notice, length must be atleast of 10 characters"
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleDeleteNotice = (id) => {
    const deleteObj = notices.find((notice) => notice.id === id);
    if (window.confirm(`do you really want to delete "${deleteObj.notice}"`))
      noticeService
        .deleteById(id)
        .then(() => {
          setNotices(notices.filter((item) => item.id !== id));
          setSuccessMessage(`"${deleteObj.notice}" deleted successfully`);
        })
        .catch(() => {
          setErrorMessage(
            `unable to delete, the user  is already deleted from the server`
          );
        });

    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  const handleChange = (event) => {
    setNewNotice(event.target.value);
  };

  return (
    <>
      <div>
        <NavBar />
        <div className={classes.root}>
          <h1 className={classes.header}>Announcements</h1>

          <Success message={successMessage} />
          <Error message={errorMessage} />

          <div className={classes.inputContainer}>
            {role === "admin" && (
              <div>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <input
                    className={classes.noticeInput}
                    value={newNotice}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Publish
                  </Button>
                </form>
              </div>
            )}
            <div className={classes.alertWrapper}>
              {!loading ? (
                notices.map((notice, id) => (
                  <div key={id} className={classes.alert}>
                    <Alert severity="info" className={classes.margin}>
                      {role === "admin" && (
                        <div>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            size="small"
                            onClick={() => handleDeleteNotice(notice.id)}
                            startIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                      <AlertTitle>Important Notice</AlertTitle>
                      <div className={classes.alertMessage}>
                        {notice.notice}
                        &nbsp;&nbsp;
                        <br />
                        <strong className={classes.publishedDate}>
                          Published on &nbsp; &nbsp;
                          {new Date(notice.date).toLocaleDateString("en-GB")}
                        </strong>
                      </div>
                    </Alert>
                  </div>
                ))
              ) : (
                <div className={classes.loaderContainer}>
                  <img src={Loader} className={classes.loaderImage} />
                  <h1 className={classes.loader}>Loading...</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
