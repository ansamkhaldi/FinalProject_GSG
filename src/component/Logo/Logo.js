import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assest/image/logo.png";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Style";

function Logo() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.Toolbar}>
      <img src={logo} alt="Logo" />
      <Typography className={classes.typography}>
        <div>Neighborhood</div>
        <div className={classes.Typography1}>PHARMACY</div>
      </Typography>
    </Toolbar>
  );
}

export default Logo;
