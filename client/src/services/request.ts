import axios from "axios";
import { StartResponseData, SubmitInput, SubmitResponseData } from "../types";

export const requestToptal = async <
  R = Record<string, any>,
  D = Record<string, any>,
>(
  route: string,
  args: { data?: D; cookie?: string; entryId?: number } = {},
) => {
  const data = args.data ?? {};
  const cookie = args.cookie ?? localStorage.getItem("cookie");
  const entryId = args?.entryId;

  return axios.post<
    {
      payload: Record<string, any>;
      cookie: string | null;
      entryId: number | undefined;
    },
    {
      status: number;
      data: {
        code: number;
        message: string;
        data: R;
      };
    }
  >(
    `http://127.0.0.1:5000${route}`,
    { payload: data, cookie: cookie, entryId },
    { headers: { "Content-Type": "application/json" } },
  );
};

export const startChallenge = async (
  cookie: string,
  {
    onSuccess,
    onError,
  }: {
    onSuccess?: (data: StartResponseData) => void;
    onError?: (message: string) => void;
  } = {},
) => {
  return requestToptal<StartResponseData>("/", { cookie })
    .then((res) => {
      if (res.status !== 200) onError?.(`${res.status} status code`);
      else if (res.data.code === 403) onError?.(res.data.message);
      else onSuccess?.(res.data.data);
    })
    .catch((error) => onError?.(error.toString()));
};

export const submitTask = async (args: {
  entryId: number;
  input: SubmitInput;
  onSuccess?: (data: SubmitResponseData) => void;
  onError?: (message: string) => void;
}) => {
  const { entryId, input, onSuccess, onError } = args;

  return requestToptal<SubmitResponseData, SubmitInput>(`/submit`, {
    data: input,
    entryId,
  })
    .then((res) => {
      if (res.status !== 200) onError?.(`${res.status} status code`);
      else if (res.data.code !== 200) onError?.(res.data.message);
      else onSuccess?.(res.data.data);
    })
    .catch((error) => onError?.(error.toString()));
};
