import React from "react";

import { Session, Task } from "./types";

export const GlobalContext = React.createContext<{
  session?: Session;
  task?: Task;
  setSession?: (updater: (session?: Session) => Session) => void;
  setTask?: (task: Task) => void;
}>({});
