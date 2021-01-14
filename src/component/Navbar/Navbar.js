import React from "react";
import useStyles from "./Style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Button, Toolbar } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import { NavData } from "./NavData";

import { AppBar } from "@material-ui/core";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HeadNav from "./HeadNav";
import Logo from "../Logo/Logo";

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xg">
      <AppBar
        position="absolute"
        alignItems
        color="inherit"
        className={classes.topNav}
        style={{ boxShadow: "none" }}
      >
        <HeadNav />

        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Grid container spacing={1} justify="space-evenly">
            <Grid item xg={1}>
              <Logo style={{ color: "black" }} />
            </Grid>
            <Grid item xg={9}>
              <nav>
                {NavData.map((item, index) => {
                  return (
                    <Link
                      variant="button"
                      color="textPrimary"
                      href="#"
                      className={classes.Link}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </Grid>
            <Grid item xg={2}>
              <Button
                href="#"
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </AppBar>
    </Container>
  );
}
