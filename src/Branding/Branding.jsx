import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Branding.css";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  style: { width: "20em", height: "3em" },
};

const Branding = () => {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box borderRadius={9} {...defaultProps}>
          <Grid container direction="column">
            <div className="branding">
              <div>Made with Passion 💙 By Aswin Asok</div>
              <div>
                <a href="https://github.com/AswinAsok/Cov-Watcher">Star 🌟 this Repo</a>
              </div>
            </div>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Branding;
