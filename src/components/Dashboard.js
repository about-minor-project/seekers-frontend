import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NavBar from "./NavBar.js";
import Newjobpost from "./Newjobpost";
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
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "name",
      },
      {
        Header: "Last Name",
        accessor: "username",
      },
      {
        Header: "ID",
        accessor: "id",
      },

      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: " Website",
        accessor: "website",
      },
    ];
    return (
      <>
        <NavBar />
        <Box p={5} color='primary.main'>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h4'>Registered Students</Typography>
            <Newjobpost />
          </Box>
        </Box>

        <ReactTable data={this.state.users} columns={columns} />
      </>
    );
  }
}
