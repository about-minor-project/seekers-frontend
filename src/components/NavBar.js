import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: 30,
    fontWeight: 400,
    color: "#3f51b5",
  },
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <Fragment>
    <AppBar className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color='inherit'
          aria-label='Menu'
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h5'>SEEKER</Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      classes={{ paper: classes.drawerPaper }}
    >
      <div
        className={clsx({ [classes.toolbarMargin]: variant === "persistent" })}
      />
      <List>
        <ListItem button className={classes.logo}>
          <ListItemText>SEEKER</ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          component={Link}
          to='/Dashboard'
          onClick={onItemClick("Profile")}
        >
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/Profile'
          onClick={onItemClick("Profile")}
        >
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/jobSearch'
          onClick={onItemClick("Posted Jobs")}
        >
          <ListItemText>Posted Jobs</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/Announcement'
          onClick={onItemClick("Announcement")}
        >
          <ListItemText>Announcement</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/Testimonial'
          onClick={onItemClick("Testimonial")}
        >
          <ListItemText>Testimonials</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/'
          onClick={onItemClick("Logout")}
        >
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Profile");
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = (title) => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
