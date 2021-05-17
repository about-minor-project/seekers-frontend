import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NavBar from "./NavBar.js";
import Newjobpost from "./Newjobpost";
import userService from "../services/user";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory, Link } from "react-router-dom";

import {
  Box,
  Grid,
  Typography,
  Button,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";

export default class Appi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  async getUsersData() {
    const loggedIn = window.localStorage.getItem("loggedUser");
    if (!loggedIn) {
      window.location = "/";
      console.log("User not logged in");
    }
    const users = await userService.getAll();
    this.setState({ loading: false, users: users });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "fname",
      },

      {
        Header: "Last Name",
        accessor: "lname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "College",
        accessor: "details.college",
      },
      {
        Header: "Graduating Year",
        accessor: "details.yearOfGrad",
      },
      {
        Header: "Current GPA",
        accessor: "details.currentGpa",
      },
      {
        Header: "Skills",
        accessor: "details.skills",
      },

      {
        Cell: () => (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <DeleteIcon />
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/profile'>
              <PersonIcon color='primary' />
            </Link>
          </>
        ),
      },
    ];
    return (
      <>
        <NavBar />
        <Box p={5} color='primary.main'>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h4'>Registered Students</Typography>
            {/* <Newjobpost /> */}
          </Box>
        </Box>

        <ReactTable data={this.state.users} columns={columns} />
      </>
    );
  }
}
