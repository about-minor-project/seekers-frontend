import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import userService from "../services/user";
import {
  Box,
  Button,
  Container,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import NavBar from "./NavBar.js";
import Loader from "../assets/loader/load.gif";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//
//   // TableWrapper : {
//   //   maxWidth="80%",
//   // },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    paper: {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #d3d3d3",
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
      width: "95%",
    },
    margin: {
      margin: "1rem",
      padding: "1.2rem",
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
    loadingContainer: {
      display: "grid",
      placeItems: "center",
      height: "60vh",
    },
    loader: {
      width: "3rem",
    },
  }));

  const history = useHistory();

  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await userService.getAll();
    setUsers(users);
    setLoading(false);
  };

  const onPageChange = (event, nextPage) => {
    setPage(nextPage);
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleDeleteProfile = (id) => {
    console.log("clicked", id);
  };
  return (
    <div>
      <NavBar />
      <Container>
        <h1>Registered Students</h1>
        {!loading ? (
          <TableContainer className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>Year of Grad</TableCell>
                  <TableCell>Current CGPA</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, id) => (
                    <TableRow key={id}>
                      <TableCell>{user.fname + " " + user.lname}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.details ? user.details.college : "NA"}
                      </TableCell>
                      <TableCell>
                        {user.details ? user.details.yearOfGrad : "NA"}
                      </TableCell>
                      <TableCell>
                        {user.details ? user.details.currentGpa : "NA"}
                      </TableCell>
                      <TableCell>
                        {user.details ? user.details.skills : "NA"}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex" }}>
                          <IconButton
                            onClick={() => history.push(`/${user.id}`)}
                            color="Primary"
                          >
                            <PersonIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              handleDeleteProfile(user.id);
                            }}
                          >
                            <DeleteIcon color="Secondary" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20, 25, 50]}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={onPageChange}
              onChangeRowsPerPage={onRowsPerPageChange}
            />
          </TableContainer>
        ) : (
          <div className={classes.loadingContainer}>
            <img src={Loader} className={classes.loader} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;