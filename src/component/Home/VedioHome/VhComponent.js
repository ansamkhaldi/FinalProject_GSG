import React from "react";
import useStyles from "./Style";

function VhComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <div fullWidth="100%" className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.head}>Welcome to Neighborhood Pharmacy</h1>
          <p className={classes.text}>
            We have been providing pharmacy services to residents of New York
            city with a commitment to quality care for years. We are a full
            service pharmacy that specializes in the needs of the specialty
            patient. Our goal is to provide our patients with convenient access
            to all pharmacy services including delivery throughout New York
            city. Our pharmacists are knowledgeable and available when ever
            needed for consultation.
          </p>
          <p className={classes.text}>
            Neighborhood Pharmacy is more than just a specialty pharmacy. At
            Neighborhood, we understand that your health is dependent upon our
            support, advice, dedication and clinical expertise. Neighborhood
            provides all of this and more. We strive to be a friendly
            neighborhood drugstore. Our knowledgeable, caring staff will work
            together to provide a superior pharmacy experience and provide
            services that help maintain your medication therapy.
          </p>
        </div>
        <div className={classes.right}>
          <div className={classes.demo}>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VhComponent;
