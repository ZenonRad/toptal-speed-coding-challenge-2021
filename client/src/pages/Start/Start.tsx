import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { startChallenge } from "../../services/request";
import { GlobalContext } from "../../contexts";

const Field = styled(TextField)({
  minWidth: "400px",
});

const Submit = styled(Button)({ minWidth: "200px" });

export interface IStartProps {
  id?: string;
}

const Start = (props: IStartProps) => {
  const { id = "start" } = props;

  const history = useHistory();

  const [cookie, setCookie] = useState<string | undefined>(
    () => localStorage.getItem("cookie") ?? undefined,
  );

  const [errorMessage, setErrorMessage] = useState<string | undefined>(); // { code: 403, message: "Please login before entering the challenge." }
  const [starting, setStarting] = useState<boolean>(false);

  const { setSession, setTask } = useContext(GlobalContext);

  const handleStart: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!cookie) return;

    setStarting(true);

    localStorage.setItem("cookie", cookie);
    startChallenge(cookie, {
      onSuccess: (data) => {
        setStarting(false);

        setSession?.(() => ({
          startDate: new Date(),
          totalPoints: 0,
          isChallengeEntryFinished: false,
          attemptId: data.attemptId,
          entry: data.entry,
          entryMeta: data.entryMeta,
        }));

        setTask?.(data.nextTask);

        history.push("/challenge");
      },
      onError: (message) => {
        setStarting(false);
        setErrorMessage(message);
      },
    });
  };

  return (
    <form id={id} onSubmit={handleStart}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {errorMessage && (
          <Grid item>
            <Alert color="error">{`Error: ${errorMessage}`}</Alert>
          </Grid>
        )}

        <Grid item>
          <Field
            label="Cookie value"
            value={cookie}
            onChange={(event) => setCookie(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Submit
            type="submit"
            variant="outlined"
            disabled={!cookie || starting}
          >
            Start
          </Submit>
        </Grid>
      </Grid>
    </form>
  );
};

export default Start;
