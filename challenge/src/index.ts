import {
  ResponseData,
  StartResponseData,
  SubmitInput,
  SubmitResponseData,
} from "./types";
import { evalSolution, loadSolution, request } from "./helpers";

(async () => {
  const startPayload: Record<string, string> = {
    challengeSlug: "toptal-js-2021",
    email: "",
    leaderboardName: "ZenonRad",
    isConfirmedToBeContacted: "1",
    isTermsAndConditionsChecked: "1",
    countryAlpha2: "MG",
  };

  console.info("\nStarting challenge !!!");

  const {
    status,
    data: { code, data: startData },
  } = await request<StartResponseData>("", startPayload);

  const {
    entry: { id: entryId, entry_key },
  } = startData;

  if (status !== 200) {
    console.error(`Start response: ${status} status code !`);
    return;
  }

  if (code !== 200) {
    console.error(`Toptal response: ${code} status code !`);
    return;
  }

  const attemptPath = `/${entryId}/attemptTask`;

  const solve = async (prevData: ResponseData & { totalPoints?: number }) => {
    if (!prevData.nextTask) {
      console.info(
        `\n🎉 Challenge completed ! Final score: ${prevData.totalPoints ?? 0}`
      );

      return;
    }

    const { attemptId } = prevData;
    const { slug, title, tests_json } = prevData.nextTask;

    console.info(`\nSolving ${title}...`);

    const code = loadSolution(slug);
    const results: Record<string, any> = {};

    for (const [key, { args }] of Object.entries(tests_json)) {
      results[key] = evalSolution(slug, code, args);
    }

    const submitPayload: SubmitInput = {
      entry_key,
      attempt_id: attemptId,
      tests_json: JSON.stringify(results),
      code,
    };

    const {
      data: { data: attemptData },
    } = await request<SubmitResponseData>(attemptPath, submitPayload);

    const { isSuccess, totalPoints, testResults } = attemptData;

    if (!isSuccess) {
      console.error(`💥 Wrong answer for ${slug} !!!`);
      console.error(JSON.stringify(testResults));
    }

    console.info(`✅ Task ${title} passed ! Current score: ${totalPoints}`);

    solve(attemptData);
  };

  solve(startData);
})();
