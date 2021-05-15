import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NavBar from "./NavBar.js";
import Newjobpost from "./Newjobpost";
import userService from "../services/user";
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
    const users = await userService.getAll();
    console.log("i have no idea what im doing all users ->", users);
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
        Header: "Graduating Year",
        accessor: "details.yearOfGrad",
      },
      {
        Header: "Current GPA",
        accessor: "details.currentGpa",
      },
    ];
    return (
      <>
        <NavBar />
        <Box p={5} color="primary.main">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4">Registered Students</Typography>
            {/* <Newjobpost /> */}
          </Box>
        </Box>

        <ReactTable data={this.state.users} columns={columns} />
      </>
    );
  }
}
