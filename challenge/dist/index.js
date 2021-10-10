"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const startPayload = {
        challengeSlug: "toptal-js-2021",
        email: "",
        leaderboardName: "ZenonRad",
        isConfirmedToBeContacted: "1",
        isTermsAndConditionsChecked: "1",
        countryAlpha2: "MG",
    };
    console.info("\nStarting challenge !!!");
    const { status, data: { code, data: startData }, } = yield (0, helpers_1.request)("", startPayload);
    const { entry: { id: entryId, entry_key }, } = startData;
    if (status !== 200) {
        console.error(`Start response: ${status} status code !`);
        return;
    }
    if (code !== 200) {
        console.error(`Toptal response: ${code} status code !`);
        return;
    }
    const attemptPath = `/${entryId}/attemptTask`;
    const solve = (prevData) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!prevData.nextTask) {
            console.info(`\n🎉 Challenge completed ! Final score: ${(_a = prevData.totalPoints) !== null && _a !== void 0 ? _a : 0}`);
            return;
        }
        const { attemptId } = prevData;
        const { slug, title, tests_json } = prevData.nextTask;
        console.info(`\nSolving ${title}...`);
        const code = (0, helpers_1.loadSolution)(slug);
        const results = {};
        for (const [key, { args }] of Object.entries(tests_json)) {
            results[key] = (0, helpers_1.evalSolution)(slug, code, args);
        }
        const submitPayload = {
            entry_key,
            attempt_id: attemptId,
            tests_json: JSON.stringify(results),
            code,
        };
        const { data: { data: attemptData }, } = yield (0, helpers_1.request)(attemptPath, submitPayload);
        const { isSuccess, totalPoints, testResults } = attemptData;
        if (!isSuccess) {
            console.error(`💥 Wrong answer for ${slug} !!!`);
            console.error(JSON.stringify(testResults));
        }
        console.info(`✅ Task ${title} passed ! Current score: ${totalPoints}`);
        solve(attemptData);
    });
    solve(startData);
}))();
//# sourceMappingURL=index.js.map