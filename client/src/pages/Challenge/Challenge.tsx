import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Editor from "react-simple-code-editor";
//@ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import Display from "./components/Display";
import { GlobalContext } from "../../contexts";
import { submitTask } from "../../services/request";
import { loadSolution, verifySolution } from "../../services/helpers";
import { TestError, TestJson } from "../../types";

const Root = styled(Grid)({
  maxWidth: "80vw",
});

const Submit = styled(Button)({ minWidth: "200px" });

export interface IChallengeProps {
  id?: string;
}

const Challenge = (props: IChallengeProps) => {
  const { id = "challenge" } = props;

  const { session, task, setSession, setTask } = useContext(GlobalContext);
  const [code, setCode] = useState<string>(task?.code ?? "");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [finished, setFinished] = useState<boolean>(false);
  const [errors, setErrors] = useState<TestError | undefined>();
  const [_, setCurrentDate] = useState<Date>(() => new Date());

  const handleSubmit = (
    slug: string,
    code: string,
    taskJson: TestJson,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event?.preventDefault();
    event?.stopPropagation();

    if (!session) return;

    setSubmitting(true);

    const { passed, errors, payload } = verifySolution(slug, code, taskJson);

    if (!passed) setErrors(errors);
    else
      submitTask({
        entryId: session.entry.id,
        input: {
          entry_key: session.entry.entry_key,
          attempt_id: session.attemptId,
          tests_json: JSON.stringify(payload!),
          code,
        },
        onSuccess: (data) => {
          setSubmitting(false);

          setSession?.((prev) => ({
            ...prev!,
            totalPoints: data.totalPoints,
            isChallengeEntryFinished: data.isChallengeEntryFinished,
            attemptId: data.attemptId,
            entryMeta: data.entryMeta,
          }));

          if (data.nextTask) setTask?.(data.nextTask);
          else setFinished(true);
        },
        onError: (message) => {
          setSubmitting(false);
          setErrorMessage(message);
        },
      });
  };

  useEffect(() => {
    if (task?.slug)
      loadSolution(task.slug).then((code) => {
        if (code) handleSubmit(task.slug, code, task.tests_json);
      });
  }, [task?.slug]);

  useEffect(() => setCode(task?.code ?? ""), [task?.code]);

  useEffect(() => {
    if (session?.isChallengeEntryFinished || finished) return;

    const timeout = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timeout);
  }, [session?.isChallengeEntryFinished, finished]);

  if (!session || !task) return <Redirect to="/start" />;

  return (
    <Root id={id} container direction="column" spacing={3}>
      <Grid item>
        <Display label="Remaining time">
          {String(
            session.startDate.getSeconds() + 50 - new Date().getSeconds(),
          )}
        </Display>
      </Grid>
      {errorMessage && (
        <Grid item>
          <Alert color="error">{`Error: ${errorMessage}`}</Alert>
        </Grid>
      )}

      <Grid item container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h4">Session</Typography>
        </Grid>
        <Display label="Points">{String(session.totalPoints)}</Display>
        <Display label="Challenge finished">
          {String(session.isChallengeEntryFinished)}
        </Display>
        <Display label="Entry finished">{String(finished)}</Display>
      </Grid>

      <Grid item container>
        <Grid item>
          <Typography variant="h4">Task</Typography>
        </Grid>
        <Display label="Task title">{String(task.title)}</Display>
        <Display label="Task slug">{String(task.slug)}</Display>
        <Display label="Task points">{String(task.points)}</Display>
        <Display label="Task Description">
          {String(task.public_description)}
        </Display>
      </Grid>

      <Grid item>
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </Grid>
      <Grid item>
        <Submit
          type="submit"
          variant="outlined"
          disabled={submitting}
          onClick={(event) =>
            handleSubmit(task.slug, code, task.tests_json, event)
          }
        >
          Submit
        </Submit>
      </Grid>
      {errors && (
        <Grid item container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="h4">Errors</Typography>
          </Grid>
          <Grid item>
            {Object.entries(errors).map(([key, { args, expected, result }]) => (
              <Display label={key}>{`Args: ${JSON.stringify(
                args,
              )}     Expected: ${JSON.stringify(
                expected,
              )}     Result: ${JSON.stringify(result)}`}</Display>
            ))}
          </Grid>
        </Grid>
      )}
    </Root>
  );
};

export default Challenge;
