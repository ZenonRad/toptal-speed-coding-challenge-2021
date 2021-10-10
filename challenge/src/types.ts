export interface Session {
  startDate: Date;
  totalPoints: number;
  isChallengeEntryFinished: boolean;
  entry: Entry;
  entryMeta: EntryMeta;
  attemptId: number;
}

export interface Entry {
  id: number;
  challenge_id: number;
  date_created: string;
  email: string;
  leaderboard_name: string;
  entry_key: string;
  is_removed: string;
  total_points: number;
  form_response_json: string;
  form_spec_json: string;
  date_stop: string;
  is_confirmed_to_be_contacted: string;
  confirm_to_be_contacted_text: string;
  is_test: string;
  country_alpha2_upcase: string;
  skipped_task_ids: string;
}

export interface EntryMeta {
  penalized_by_cooldown_sec: boolean;
  current_task_ind: number;
  tasks_state: string;
}

export interface Task {
  id: number;
  lang: string;
  slug: string;
  code: string;
  cursor_row: number;
  cursor_column: number;
  title: string;
  points: number;
  public_description: string;
  tests_json: TestJson;
}

export interface SubmitInput {
  attempt_id: number;
  entry_key: string;
  tests_json: string;
  code: string;
}

export type TestJson = Record<
  string,
  {
    args: Array<any>;
    result?: any;
  }
>;

export type TestResults = Record<
  string,
  { isOk: boolean; expectedResult: any }
>;

export interface ResponseData {
  attemptId: number;
  entryMeta: EntryMeta;
  nextTask: Task;
}

export interface StartResponseData extends ResponseData {
  entry: Entry;
}

export interface SubmitResponseData extends ResponseData {
  isSuccess: boolean;
  totalPoints: number;
  isChallengeEntryFinished: boolean;
  testResults: TestResults;
}

export type TestError = Record<
  string,
  { args: Array<any>; expected: any; result: any }
>;
