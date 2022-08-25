import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {ContextList} from "../Context/ContextPassphrase";
import Params from "../params/params";

import React, {useContext} from "react";

const Content = () => {
  const context = useContext(ContextList);
  const {isUserSetCorrectPassphrase} = context;
  const greetings = "Hello there!";
  console.log(isUserSetCorrectPassphrase);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {isUserSetCorrectPassphrase ? (
        <Typography variant="h6">{greetings}</Typography>
      ) : (
        <Typography variant="h6">{Params.information}</Typography>
      )}
    </Grid>
  );
};

export default Content;
