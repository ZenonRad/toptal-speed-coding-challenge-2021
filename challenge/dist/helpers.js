"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalSolution = exports.loadSolution = exports.request = void 0;
const path = __importStar(require("path"));
const fs_1 = require("fs");
const axios_1 = __importDefault(require("axios"));
const cookie = "PHPSESSID=f1c31811e373b752502dbdcaec1a8cbf";
const baseUrl = "https://speedcoding.toptal.com/webappApi/entry";
const params = { ch: "29", acc: "5755" };
const toUrlEncoded = (data) => Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
const request = (path, data) => __awaiter(void 0, void 0, void 0, function* () {
    const urlEncoded = toUrlEncoded(data);
    console.log({ urlEncoded });
    return axios_1.default.post(`${baseUrl}${path}`, urlEncoded, {
        headers: {
            accept: "*/*",
            cookie,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params,
    });
});
exports.request = request;
const loadSolution = (slug) => {
    const filePath = path.join(__dirname, "solutions", `${slug}.js`);
    return (0, fs_1.readFileSync)(filePath).toString();
};
exports.loadSolution = loadSolution;
const evalSolution = (slug, code, args) => {
    const script = `
    const box = {}
    ${code}
    (box.${slug}(...${JSON.stringify(args)}))
  `;
    try {
        return eval(script);
    }
    catch (error) {
        console.error(`💥 Failed to eval solution for ${slug}: ${String(error)}`);
        console.error(`Args: ${JSON.stringify(args)}\nCode: ${code}`);
        throw error;
    }
};
exports.evalSolution = evalSolution;
//# sourceMappingURL=helpers.js.map