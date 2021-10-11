import * as path from "path";
import { readFileSync } from "fs";
import axios from "axios";

const cookie = "*******************************************";

const baseUrl = "https://speedcoding.toptal.com/webappApi/entry";
const params = { ch: "29", acc: "5755" };

const toUrlEncoded = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export const request = async <R = Record<string, any>>(
  path: string,
  data: Record<string, any>
) => {
  const urlEncoded = toUrlEncoded(data);

  return axios.post<
    string,
    {
      status: number;
      data: {
        code: number;
        message: string;
        data: R;
      };
    }
  >(`${baseUrl}${path}`, urlEncoded, {
    headers: {
      accept: "*/*",
      cookie,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params,
  });
};

export const loadSolution = (slug: string) => {
  const filePath = path.join(__dirname, "solutions", `${slug}.js`);
  return readFileSync(filePath).toString();
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
    console.error(`💥 Failed to eval solution for ${slug}: ${String(error)}`);
    console.error(`Args: ${JSON.stringify(args)}\nCode: ${code}`);
    throw error;
  }
};
