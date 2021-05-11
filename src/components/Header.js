import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0 8px",
    fontSize: ".8rem",
    "&hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  btnRoot: {
    backgroundColor: "green",
  },
  btnLabel: {
    background: "red",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Topik"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm={true}></Grid>
          <Grid item>
            <IconButton
            // classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
