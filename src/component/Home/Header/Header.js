import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Style";

export default function Header(props) {
  const classes = useStyles();
  return (
    <div fullWidth="100%" className={classes.header}>
      <div className={classes.Text}>
        <Typography align="left" variant="h1">
          Your Local Neighborhood Pharmacy
        </Typography>
        <p align="left">
          Our pharmacy is your trusted source of pharmaceutical services and
          products. We have what you are looking for.
        </p>
      </div>
      <div className={classes.Text}></div>
    </div>
  );
}
