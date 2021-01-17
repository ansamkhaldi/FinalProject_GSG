import React from "react";
import { Grid, Link } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import useStyles from "./Style";

function HeadNav(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      justify="space-evenly"
      style={{ borderBottom: `1px solid #c2c2c2`, padding: "0% 3%" }}
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
  );
}

export default HeadNav;
