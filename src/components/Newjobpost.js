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

const skills = ["JavaScript", "Node.js", "Cpp"];

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [buttonText, setButtonText] = useState("Post");

  const changeText = (text) => setButtonText(text);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Post Job{" "}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{"Add Job"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item x6>
              <FilledInput
                placeholder='Job Title*'
                disableUnderline
              ></FilledInput>
            </Grid>
            <Grid item x6>
              <Select
                disableUnderline
                variant='filled'
                defaultValue='full time'
                fullWidth
              >
                <MenuItem value='full time'>Full Time</MenuItem>
                <MenuItem value='internship'>Internship</MenuItem>
                <MenuItem value='part time'>Part Time</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item x6>
              <FilledInput
                placeholder='Company Name*'
                disableUnderline
              ></FilledInput>
            </Grid>
            <Grid item x6>
              <FilledInput
                placeholder='Company Url*'
                disableUnderline
              ></FilledInput>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item x6>
              <Select
                disableUnderline
                variant='filled'
                defaultValue='remote'
                fullWidth
              >
                <MenuItem value='remote'>Remote</MenuItem>
                <MenuItem value='inoffice'>In Office</MenuItem>
              </Select>
            </Grid>
            <Grid item x6>
              <FilledInput
                placeholder='Job Link*'
                disableUnderline
              ></FilledInput>
            </Grid>
            <Grid item x12>
              <FilledInput
                placeholder='Add Skills*'
                disableUnderline
                multiline
                rowsMin={3}
              ></FilledInput>
            </Grid>
            <Grid item x6>
              <FilledInput
                placeholder='Job Description*'
                disableUnderline
                multiline
                rowsMin={3}
              ></FilledInput>
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
            Discard
          </Button>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => setButtonText("Posted")}
            autoFocus
          >
            {buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
