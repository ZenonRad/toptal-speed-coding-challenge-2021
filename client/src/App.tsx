import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

import Start from "./pages/Start";
import Challenge from "./pages/Challenge";
import { Session, Task } from "./types";
import { GlobalContext } from "./contexts";

const Root = styled(Grid)({
  width: "100vw",
  height: "100vh",
});

function App() {
  const [session, setSession] = useState<Session | undefined>();
  const [task, setTask] = useState<Task | undefined>();

  return (
    <Root container justifyContent="center" alignItems="center">
      <GlobalContext.Provider value={{ session, task, setSession, setTask }}>
        <BrowserRouter>
          <Switch>
            <Route path="/start">
              <Start />
            </Route>
            <Route path="/challenge">
              <Challenge />
            </Route>
            <Redirect to="/start" />
          </Switch>
        </BrowserRouter>
      </GlobalContext.Provider>
    </Root>
  );
}

export default App;
