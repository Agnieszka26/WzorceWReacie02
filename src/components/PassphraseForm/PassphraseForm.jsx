import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

import React, {useContext} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ContextList} from "../Context/ContextPassphrase";
import params from "../params/params";

const PassPhraseForm = () => {
  let navigate = useNavigate();
  const {passphrase} = params;
  const context = useContext(ContextList);
  // const {users} = context;

  const title = "Please, enter your password";
  const {isUserSetCorrectPassphrase, setIsUserSetCorrectPassphrase} = context;
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();


  const onSubmit = (data) => {
    setIsUserSetCorrectPassphrase(true);
    navigate("/app");
  };

  return (

    <Container fixed>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <TextField
            label={"passphrase"}
            {...register("passphrase", {
              required: "Passphrase is required. ",
              validate: (value) => {
                if (value !== passphrase) {
                  return "Passphrase is not correct";
                }
              },
            })}
            helperText={errors?.passphrase?.message}
          />
          <Button type="submit">Submit</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default PassPhraseForm;
