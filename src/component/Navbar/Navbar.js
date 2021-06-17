import React from "react";
import useStyles from "./Style";
import Grid from "@material-ui/core/Grid";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { NavData } from "./NavData";
import { AppBar } from "@material-ui/core";
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
          color="inherit"
          elevation={0}
          className={classes.appBar}
        >
          <Grid
            container
            spacing={0}
            justify="space-evenly"
            style={{ marginTop: "10px" }}
          >
            <Grid item xg={1} xs={0}>
              <Logo />
            </Grid>
            <Grid item xg={9} xs={0} className={classes.Grid}>
              <nav
                display="flex"
                alignItems="flex-center"
                justify="flex-center"
                className={classes.nav}
              >
                {NavData.map((item, index) => {
                  return (
                    <Link
                      // p={1}

                      to={item.path}
                      className={classes.link}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </Grid>
            <Grid item xg={2} xs={0} style={{ paddingTop: "18px" }}>
              <Button
                className={classes.ButtonSub}
                variant="contained"
                color="primary"
                size="large"
                textTransform="none"
              >
                Get a quote
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </AppBar>
    </Container>
  );
}
