import React, { Component } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import Details from "./jobDetails";

import NavBar from "./NavBar";
const styles = (theme) => ({
  wrapper: {
    border: "1px solid black",
    display: "flex",
  },
});

class jobSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  render() {
    return (
      <>
        <NavBar />
        <Box p={5} color='primary.main' style={styles.wrapper}>
          <Box display='flex' justifyContent='center'>
            <Typography variant='h4'>Open Jobs List</Typography>
          </Box>
        </Box>
        <Box p={2} bgcolor='primary' mb='5' color='white' minWidth='500'>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <Select disableUnderline variant='filled' defaultValue='full time'>
              <MenuItem value='full time'>Full Time</MenuItem>
              <MenuItem value='internship'>Internship</MenuItem>
              <MenuItem value='part time'>Part Time</MenuItem>
            </Select>
            <Select disableUnderline variant='filled' defaultValue='remote'>
              <MenuItem value='remote'>Remote</MenuItem>
              <MenuItem value='inoffice'>In Office</MenuItem>
            </Select>
            <Button variant='contained' align='right'>
              Search
            </Button>
          </Box>
        </Box>

        <Box p={2} bgcolor='gray' mb='5' color='white' minWidth='500'>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                Frontend Developer
                <p>Google</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='white'
            color='black'
          >
            <div>
              <p>
                Backend Developer
                <p>MongoDB</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3 ,jQuery</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                Project Manager
                <p>CoackroachDb</p>
              </p>
            </div>
            <p>JS ,PHP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='white'
            color='black'
          >
            <div>
              <p>
                SDE - II
                <p>Tesla</p>
              </p>
            </div>
            <p>JS ,CPP , PYTHON ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                Backend developer
                <p>Amazon</p>
              </p>
            </div>
            <p>JS ,CPP ,Mongodb ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='white'
            color='black'
          >
            <div>
              <p>
                Project Manager
                <p>Uber</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,JAVA , AGILE</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                System Engineer
                <p>Adobe</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='white'
            color='black'
          >
            <div>
              <p>
                Assistant Manager
                <p>Google</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                Frontend dev
                <p>Google</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            color='black'
            bgcolor='white'
          >
            <div>
              <p>
                Frontend Developer
                <p>IBM</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3</p>
            <p>
              <Details />
            </p>
          </Box>
          <Box
            p={1}
            display='flex'
            justifyContent='space-around'
            bgcolor='rgb(0 0 0 / 19%)'
          >
            <div>
              <p>
                Programmer
                <p>PostMan</p>
              </p>
            </div>
            <p>JS ,CPP ,HTML5 ,CSS3 , DS</p>
            <p>
              <Details />
            </p>
          </Box>
        </Box>
      </>
    );
  }
}

export default jobSearch;
