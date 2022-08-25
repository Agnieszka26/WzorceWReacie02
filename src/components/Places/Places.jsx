import WithUser from "../HigherOrderComponent/withUser";
import {ContextList} from "../Context/ContextPassphrase";
import Params from "../params/params";

import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";

const Places = ({name, email, isAdmin}) => {
  const context = useContext(ContextList);
  const {isUserSetCorrectPassphrase} = context;
  return (
    <>
      {isUserSetCorrectPassphrase ? (
        <div>
          <h1>Places </h1>
          <h1>{name}</h1>
          <h1> {email} </h1>
          <h1> Admin: {isAdmin.toString()} </h1>
        </div>
      ) : (
        <Typography variant="h6">{Params.information}</Typography>
      )}
    </>
  );
};
export default WithUser(Places);
