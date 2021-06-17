import React from "react";
import AppMaps from "../Map/AppMaps";
import { Grid, Container } from "@material-ui/core";
import useStyles from "./Style";

function MapComp(props) {
  const classes = useStyles();
  return (
    <Container style={{ paddingLeft: " 90px", paddingBottom: "100px" }}>
      <Grid container className={classes.comp} style={{ marginTop: " 250px" }}>
        <Grid item sm={12} lg={5} className={classes.com}>
          <h1>Get in touch</h1>
          <p style={{ fontSize: "18px" }}>
            Get in touch If you wish to contact an individual staff member,
            please refer to our staff directory. For general inquiries, please
            submit the contact form below, call us at 123.456.7890 or email us
            at hello@copefamlycenter.org.
          </p>
          <div>
            <span>707 Randolph Street Napa, NY 94559</span>
            <span> 125 Green Street, NY 94559</span>
          </div>
          <div>
            <span>(123)-456-7890</span>
            <span>(123)-456-7891</span>
          </div>
          <div>
            <span>M-F 8:30am-5:00pm</span>
            <span>M-F 8:00am-6:00pm</span>
          </div>
        </Grid>
        <Grid item sm={12} lg={7}>
          <AppMaps />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MapComp;
