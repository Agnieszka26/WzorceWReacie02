import WithUser from "../HigherOrderComponent/withUser";
import {ContextList} from "../Context/ContextPassphrase";
import Params from "../params/params";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import React, {useContext} from "react";

const Places = ({name, email, isAdmin}) => {
  const context = useContext(ContextList);
  const {isUserSetCorrectPassphrase} = context;
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {!isUserSetCorrectPassphrase ? ( //negation to show component
        <>
          <Typography sx={{ p: 1}}>Places</Typography>
          <Card sx={{minWidth: 275,  p: 1}} >
            <CardContent>
              <Typography sx={{mb: 1.5}} color="text.secondary">
                Name: {name}
              </Typography>
              <Typography variant="body2"> Email: {email}</Typography>
              <Typography variant="body2">
                Admin: {isAdmin.toString()}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <Typography variant="h6">{Params.information}</Typography>
      )}
    </Grid>
  );
};
export default WithUser(Places);
