import * as path from "path";
import _ from "lodash";
import { TestError, TestJson } from "../types";

export const loadSolution = async (
  slug: string,
): Promise<string | undefined> => {
  try {
    const code = await (
      await fetch(path.join("solutions", `${slug}.js`))
    ).text();

    if (code.includes("!DOCTYPE")) return undefined;
    return code;
  } catch {}
};

export const evalSolution = (slug: string, code: string, args: Array<any>) => {
  const script = `
    const box = {}
    ${code}
    (box.${slug}(...${JSON.stringify(args)}))
  `;

  try {
    return eval(script);
  } catch (error) {
    console.log({ error, slug, code, args, script });
    throw error;
  }
};

export const verifySolution = (
  slug: string,
  code: string,
  testsJson: TestJson,
): {
  passed: boolean;
  errors?: TestError;
  payload?: Record<string, any>;
} => {
  let passed = true;
  const errors: TestError = {};
  const payload: Record<string, any> = {};

  for (const [key, { args, result: expectedResult }] of Object.entries(
    testsJson,
  )) {
    const result = evalSolution(slug, code, args);

    if (
      expectedResult !== undefined &&
      expectedResult !== null &&
      !_.isEqual(result, expectedResult)
    ) {
      errors[key] = { args, expected: expectedResult, result };
      passed = false;
    } else payload[key] = result;
  }

  return { passed, errors, payload };
};
