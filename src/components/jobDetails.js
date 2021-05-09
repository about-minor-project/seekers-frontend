import React, { useState } from "react";
import { Button, Grid, Select, MenuItem, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { FilledInput } from "@material-ui/core";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [buttonText, setButtonText] = useState("Apply");

  const changeText = (text) => setButtonText(text);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' color='black' onClick={handleClickOpen}>
        Details{" "}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{"Details"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item x6>
              <Typography>Job Title - Frontend Developer</Typography>
              <Typography>Company Name: Google</Typography>
              <Typography>Company URL: https:\\google.com</Typography>
              <Typography>Job Link - https:\\carriers.google.com</Typography>
              <Typography>Location: Remote</Typography>
              <Typography>Job Type: Full Time</Typography>
              <Typography>Skills : </Typography>
              <Button variant='contained' color='secondary'>
                C
              </Button>{" "}
              <Button variant='contained' color='secondary'>
                CPP
              </Button>{" "}
              <Button variant='contained' color='secondary'>
                JAVA
              </Button>{" "}
              <Button variant='contained' color='secondary'>
                PYTHON
              </Button>{" "}
              <Button variant='contained' color='secondary'>
                CSS3
              </Button>{" "}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant='outlined'
            onClick={handleClose}
            color='primary'
          >
            Close
          </Button>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => setButtonText("Applied")}
          >
            {buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
