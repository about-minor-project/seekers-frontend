import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import noticeService from "../services/notice";

import Divider from "@material-ui/core/Divider";
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
import Button from "@material-ui/core/Button";

import { Alert, AlertTitle } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

const Announcement = () => {
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
      display: "grid",
      alignItems: "center",
    },
    inputContainer: {
      // display: "flex",
    },
    noticeInput: {
      padding: ".7rem",
      width: "40rem",
      marginRight: "1rem",
    },
  }));

  const [notices, setNotices] = useState([]);
  const [role, setRole] = useState([]);
  const [newNotice, setNewNotice] = useState([]);

  useEffect(() => {
    const role = window.localStorage.getItem("role");
    setRole(role);
    noticeService.getAll().then((data) => setNotices(data));
  }, []);
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hello", newNotice);
    const notice = newNotice;
    noticeService.create(notice).then((res) => console.log("added note", res));

    const savedNotice = await noticeService.create({
      notice,
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNotice(event.target.value);
  };

  return (
    <>
      <div>
        <NavBar />
        <div className={classes.root}>
          <h1 className={classes.header}>Notice</h1>
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
              {notices.map((notice, id) => (
                <div key={id} className={classes.alerts}>
                  <Alert severity="info">
                    <AlertTitle>Important Notice</AlertTitle>
                    {notice.notice}
                    &nbsp;&nbsp;
                    <strong>
                      {new Date(notice.date).toLocaleDateString()}
                    </strong>
                  </Alert>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
