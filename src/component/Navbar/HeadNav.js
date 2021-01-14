import React from "react";
import { AppBar, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import useStyles from "./Style";

function HeadNav(props) {
  const classes = useStyles();
  return (
    // <AppBar
    //   position="absolute"
    //   alignItems
    //   color="inherit"
    //   className={classes.topNav}
    //   style={{ boxShadow: "none" }}
    // >
    <Grid
      container
      spacing={0}
      justify="space-evenly"
      style={{ borderBottom: `1px solid red` }}
    >
      <Grid item lg={2} xs={4}>
        <p className={classes.typography}>COVID UPDATE</p>
      </Grid>
      <Grid item lg={6} xs={8}>
        <p className={classes.P}>
          Stay informed on the coronavirus (COVID-19). Be prepared & track
          updates.
        </p>
      </Grid>
      <Grid item lg={4} xs={12} color="theme.palette.gray[200]">
        <Link className={classes.link} underline="none" color="inherit">
          <LocationOnIcon style={{ fontSize: 12 }} />
          Our Location
        </Link>
        <span className={classes.link}> | </span>
        <Link className={classes.link} underline="none" color="inherit">
          <CallIcon style={{ fontSize: 12 }} />
          (123) 456-7890
        </Link>
      </Grid>
    </Grid>
    // </AppBar>
  );
}

export default HeadNav;
