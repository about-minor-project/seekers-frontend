import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <>
        <AppBar>
          <div>
            <Typography variant='h4'>user</Typography>
          </div>
        </AppBar>

        <div>
          <h2>User Profile</h2>
          <p>here user will be able to visit pages.</p>
        </div>
      </>
    );
  }
}
export default Home;
