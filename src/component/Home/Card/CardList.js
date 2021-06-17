import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
import useStyles from "./Style";
import CardData from "./CartData";
import Card from "./Card";

export default function CardList(props) {
  const classes = useStyles();
  return (
    <div fullWidth="100%" className={classes.cardGrid}>
      <Container maxWidth="xg" className={classes.List}>
        <Grid container justify="space-evenly" spacing={4}>
          {CardData.map((data, index) => {
            return (
              <Card backgroundImage={data.img}>
                <p className={classes.txt_1}>{data.title}</p>
                <h4 className={classes.head}>{data.type}</h4>
                <p>
                  <strong className={classes.Price}>{data.price}</strong>
                  <span className={classes.firstPrice1}>
                    <span className={classes.firstPrice}>
                      {data.firstPrice}
                    </span>
                  </span>
                </p>
                <Button
                  className={classes.ButtonContact}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Contact Us
                </Button>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
