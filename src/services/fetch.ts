// import axios from "axios";
// import http2 from "http2";

const url = "https://speedcoding.toptal.com/webappApi/entry";

const data = {
  challengeSlug: "toptal-js-2021",
  email: "",
  leaderboardName: "ZenonRad",
  isConfirmedToBeContacted: 1,
  isTermsAndConditionsChecked: 1,
  countryAlpha2: "MG",
};

// const post = (url: string, body: any) =>
//   new Promise((resolve) => {
//     const client = http2.connect(url);

//     console.log(multiPost(body, "----WebKitFormBoundaryBTzLwOJ4CclN7q8k"));

//     const buffer = Buffer.from(
//       JSON.stringify(multiPost(body, "----WebKitFormBoundaryBTzLwOJ4CclN7q8k"))
//     );

//     const headers = {
//       [http2.constants.HTTP2_HEADER_AUTHORITY]: "speedcoding.toptal.com",
//       [http2.constants.HTTP2_HEADER_SCHEME]: "https",
//       [http2.constants.HTTP2_HEADER_METHOD]: http2.constants.HTTP2_METHOD_POST,
//       [http2.constants.HTTP2_HEADER_PATH]: `/webappApi/entry?ch=29&acc=5755`,
//       [http2.constants.HTTP2_HEADER_ACCEPT]: `*/*`,
//       [http2.constants.HTTP2_HEADER_ACCEPT_ENCODING]: `gzip, deflate, br`,
//       [http2.constants.HTTP2_HEADER_ACCEPT_LANGUAGE]: `en-US,en;q=0.9`,
//       [http2.constants.HTTP2_HEADER_CONTENT_TYPE]:
//         "multipart/form-data; boundary=----WebKitFormBoundaryBTzLwOJ4CclN7q8k",
//       [http2.constants.HTTP2_HEADER_CONTENT_LENGTH]: buffer.length,
//       [http2.constants.HTTP2_HEADER_COOKIE]:
//         "PHPSESSID=c50c10c8d1495fbe4948a161bb45b0f7",
//       [http2.constants.HTTP2_HEADER_REFERER]:
//         "https://speedcoding.toptal.com/challenge?ch=toptal-js-2021",
//     };

//     const req = client.request(headers);

//     // req.setEncoding("binary");
//     const chunks: any[] = [];
//     req.on("data", (data) => chunks.push(data));
//     req.write(buffer);
//     req.end();
//     req.on("end", () => {
//       let body = Buffer.concat(chunks);
//       // console.log(`\n${data.toString()}`);
//       // client.close();
//       // console.log({
//       //   ascii: Buffer.from(data, "ascii").toString("utf8"),
//       //   base64: Buffer.from(data, "base64").toString("utf8"),
//       //   hex: Buffer.from(data, "hex").toString("utf8"),
//       //   latin1: Buffer.from(data, "latin1").toString("utf8"),
//       //   "utf-8": Buffer.from(data, "utf-8").toString("utf8"),
//       //   utf8: Buffer.from(data, "utf8").toString("utf8"),
//       // });

//       // console.log({
//       //   ascii: Buffer.from(data, "ascii").toString("ascii"),
//       //   base64: Buffer.from(data, "base64").toString("ascii"),
//       //   hex: Buffer.from(data, "hex").toString("ascii"),
//       //   latin1: Buffer.from(data, "latin1").toString("ascii"),
//       //   "utf-8": Buffer.from(data, "utf-8").toString("ascii"),
//       //   utf8: Buffer.from(data, "utf8").toString("ascii"),
//       // });

//       // console.log({ json: JSON.parse(data.toString("utf8")) });
//       console.log({ json: JSON.parse(body.toString()) });

//       // resolve({ data: Buffer.from(data, "base64").toString("utf8") });
//     });
//   });

// function multiPost(formHash: any, boundary: string) {
//   var body = "";

//   for (var key in formHash) {
//     body +=
//       "--" +
//       boundary +
//       "\r\nContent-Disposition: form-data; name=" +
//       formHash[key].name +
//       "\r\nContent-type: " +
//       formHash[key].type +
//       "\r\n\r\n" +
//       formHash[key].value +
//       "\r\n";
//   }
//   body += "--" + boundary + "--\r\n";

//   return body;
// }

// export default () => post(url, data);
// // .then((res) => console.log(res))
// // .catch((error) => {
// //   console.error(error);
// // });

// export default () => {
//   axios
//     .post(url, data, {
//       headers: {
//         cookie:
//           'PHPSESSID=c50c10c8d1495fbe4948a161bb45b0f7; _ga=GA1.2.2074188579.1633518501; _gid=GA1.2.242581214.1633518501; _fbc=fb.1.1633518505899.IwAR2WTNcU2P8v7wO1Ekh77BqTqI_NC0-_7V2kqpEvx0SSYxtALs4zXwNWyyM; _fbp=fb.1.1633518505901.1040215812; visitor_id=236c2a9a-337b-452c-b4ac-e062606c310e; __hstc=6380845.f252451b4bbfb09f6dfc898cf9bc0a45.1633584321835.1633584321835.1633584321835.1; hubspotutk=f252451b4bbfb09f6dfc898cf9bc0a45; __hssrc=1; dG9wdGFsLmNvbQ==-_lr_uf_-vk1pxz=d6332d42-e609-4a3c-bbea-06a8abff2d21; _uetvid=f53f63b0272e11ecb6d0631877ff9a61; _gcl_au=1.1.1155877944.1633584366; _rdt_uuid=1633584365994.53caf88d-7a20-4880-8805-f9c096188c0d; ajs_anonymous_id="236c2a9a-337b-452c-b4ac-e062606c310e"; _gat_gtag_UA_153788370_1=1',
//         // cookie: "PHPSESSID=c50c10c8d1495fbe4948a161bb45b0f7",
//         // "content-type":
//         //   "multipart/form-data; boundary=----WebKitFormBoundaryBTzLwOJ4CclN7q8k",
//       },
//       params: { ch: 29, acc: 5755 },
//     })
//     .then((res) => console.log(res))
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const { request } = require("http2-client");

// export default () => {
//   const req1 = request(
//     "https://speedcoding.toptal.com/webappApi/entry",
//     {
//       method: "POST",
//       path: "",
//       body: {
//         challengeSlug: "toptal-js-2021",
//         email: "",
//         leaderboardName: "ZenonRad",
//         isConfirmedToBeContacted: 1,
//         isTermsAndConditionsChecked: 1,
//         countryAlpha2: "MG",
//       },
//       headers: {
//         //   ":authority": "speedcoding.toptal.com",
//         // "content-type":
//         //   "multipart/form-data; boundary=----WebKitFormBoundaryBTzLwOJ4CclN7q8k",
//         cookie: "PHPSESSID=c50c10c8d1495fbe4948a161bb45b0f7",
//         // cookie:
//         //   'PHPSESSID=c50c10c8d1495fbe4948a161bb45b0f7; _ga=GA1.2.2074188579.1633518501; _gid=GA1.2.242581214.1633518501; _fbc=fb.1.1633518505899.IwAR2WTNcU2P8v7wO1Ekh77BqTqI_NC0-_7V2kqpEvx0SSYxtALs4zXwNWyyM; _fbp=fb.1.1633518505901.1040215812; visitor_id=236c2a9a-337b-452c-b4ac-e062606c310e; __hstc=6380845.f252451b4bbfb09f6dfc898cf9bc0a45.1633584321835.1633584321835.1633584321835.1; hubspotutk=f252451b4bbfb09f6dfc898cf9bc0a45; __hssrc=1; dG9wdGFsLmNvbQ==-_lr_uf_-vk1pxz=d6332d42-e609-4a3c-bbea-06a8abff2d21; _uetsid=f53f06b0272e11ec98463367723f06a5; _uetvid=f53f63b0272e11ecb6d0631877ff9a61; _gcl_au=1.1.1155877944.1633584366; _rdt_uuid=1633584365994.53caf88d-7a20-4880-8805-f9c096188c0d; ajs_anonymous_id="236c2a9a-337b-452c-b4ac-e062606c310e"; dG9wdGFsLmNvbQ==-_lr_tabs_-vk1pxz/toptal={"sessionID":0,"recordingID":"5-0fd5ebca-2b2d-4d14-abee-02a53d729602","lastActivity":1633584433142}; dG9wdGFsLmNvbQ==-_lr_hb_-vk1pxz/toptal={"heartbeat":1633586466892}; _gat_gtag_UA_153788370_1=1',
//       },
//       params: { ch: 29, acc: 5755 },
//     },
//     (res: { statusCode: any; httpVersion: any }) => {
//       console.log(`
//     Status : ${res.statusCode}
//     HttpVersion : ${res.httpVersion}
//     `);
//     }
//   );
//   req1.end();
// };

export {};
