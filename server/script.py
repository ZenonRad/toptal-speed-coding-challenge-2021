# ---------------------------------------------------- IMPORTS ---------------------------------------------------------
# Your import statements can be written here.
# All builtins python package can be imported.
# Popular libraries for ML like tensorflow, sklearn,
# pandas, nltk are also supported.

import json
from logging import Logger
from urllib3.exceptions import InsecureRequestWarning
import requests
import js2py


solutions = {
    "arrayToObject": """box.arrayToObject = function arrayToObject(x) {
            if (x.length === 0) return [];

            const result = {};

            for (let i = 0; i < x.length; i++) {
                const key = x[i][0]
                const value = x[i][1]
                result[key] = value;
            }

            return result;
        };
    """,

    "averageAsciiChar": """box.averageAsciiChar = function averageAsciiChar(x) {
            const len = x.length;
            let sum = 0;

            for (let i = 0; i < len; i++) {
                sum += x[i].charCodeAt(0);
            }

            return String.fromCharCode(Math.round(sum / (len || 1)));
        };
    """,

    "binaryToNumber": """box.binaryToNumber = function binaryToNumber(x) {
            return parseInt(String(x), 2);
        };
    """,

    "charCountInString": """box.charCountInString = function charCountInString(x, y) {
            let n = 0;
            for (let i = 0; i < y.length; i++) if (y[i] === x) n++;
            return n;
        };
    """,

    "countUniqueNumbers": """box.countUniqueNumbers = function countUniqueNumbers(x) {
            const set = {}
            
            for(let i = 0; i < x.length; i++)
                set[x[i]] = 0;
            
            return Object.keys(set).length;
        };
    """,

    "cube": """box.cube = function cube(x) {
            return x * x * x;
        };
    """,

    "digitOccurrence": """box.digitOccurrence = function digitOccurrence(n, x) {
            let allNumbers = "";
            let count = 0;

            for (let i = 0; i < n + 1; i++) allNumbers = allNumbers.concat(String(i));

            for (let i = 0; i < allNumbers.length; i++)
                if (allNumbers[i] == String(x)) count++;

            return count;
        };
    """,

    "findAverage": """box.findAverage = function findAverage(x) {
            let len = x.length;
            if (len === 0) return 0;

            let sum = 0;
            for (let i = 0; i < len; i++) sum += x[i];
            return Math.ceil(sum / len);
        };
    """,

    "findUniqueNumber": """box.findUniqueNumber = function findUniqueNumber(x) {
            // x is an array of numbers
            // return a number
            // (ex. x=[1,1,2,4,2,4,3] you should return 3)

            const occurrences = {};
            const len = x.length;

            for (let i = 0; i < len; i++) {
                const item = x[i];
                occurrences[item] = occurrences[item] ? occurrences[item] + 1 : 1;
            }
            
            const keys = Object.keys(occurrences)
            let found = undefined
            
            for(let i = 0; i < keys.length; i++) {
                const key = keys[i];
                
                if(occurrences[key] === 1)
                    found = key;
            }

            return parseInt(found);
        };
    """,

    "findWord": """box.findWord = function findWord(word, sentence) {
            // Given word and sentence as two strings,
            // Return the start and end indices of the word in the sentence as an array
            // (ex. word="morning" sentence="Good morning coders!" should return [5,11])

            const index = sentence.toLowerCase().indexOf(word.toLowerCase());
            if (index === -1) return [];
            return [index, index + word.length - 1];
        };
    """,

    "firstUniqueChar": """box.firstUniqueChar = function firstUniqueChar(x) {
            const count = {};
            const len = x.length;

            for (let i = 0; i < len; i++) {
                const char = x[i];
                count[char] = count[char] ? count[char] + 1 : 1;
            }

            const keys = Object.keys(count);

            for (let i = 0; i < keys.length; i++) {
                const char = keys[i];
                if (count[char] === 1) return char;
            }

            return false;
        };
    """,

    "getHalfArray": """box.getHalfArray = function getHalfArray(x) {
            const halfLen = Math.ceil(x.length / 2);
            const result = [];

            for (let i = 0; i < halfLen; i++) {
                result.push(x[i]);
            }

            return result;
        };
    """,

    "getType": """box.getType = function getType(x) {
            // x is a variable of a random type
            // return the data type of x
            // (ex. x="hello" should return "string")
            return typeof x;
        };
    """,

    "hashPassword": """box.hashPassword = function hashPassword(password, x) {
            const len = password.length;
            const oneCode = "0".charCodeAt(0);
            const upperACode = "A".charCodeAt(0);
            const lowerACode = "a".charCodeAt(0);
            let hashed = "";

            const convert = function (char) {
                let code = char.charCodeAt(0);

                if (code >= upperACode) {
                let from, to;

                if (code < lowerACode) {
                    from = upperACode;
                    to = lowerACode;
                } else {
                    from = lowerACode;
                    to = upperACode;
                }

                code = ((code - from + x) % 26) + to;
                } else code = ((code - oneCode + x) % 10) + oneCode;

                return String.fromCharCode(code);
            };

            for (let i = 0; i < len; i++) {
                hashed += convert(password[i]);
            }

            return hashed;
        };
    """,

    "hexToRGB": """box.hexToRGB = function hexToRGB(x) {
            let y = x;

            if (y.length === 4) y = "#" + y[1] + y[1] + y[2] + y[2] + y[3] + y[3];

            return [0, 1, 2].map(function (_, i) {
                    return parseInt(y.slice(2 * i + 1, 2 * (i + 1) + 1), 16)
                }
            );
        };
    """,

    "isPalindrome": """box.isPalindrome = function isPalindrome(x) {
            const safe = x.replace(/[_\W]/g, "").toLowerCase();

            const len = safe.length;
            const halfLen = Math.floor(len / 2);

            for (let i = 0; i < halfLen; i++) {
                if (safe[i] !== safe[len - i - 1]) return false;
            }

            return true;
        };
    """,

    "isPrime": """box.isPrime = function isPrime(x) {
            if (x <= 3) return x > 1;
            if (x % 2 === 0 || x % 3 === 0) return false;

            let count = 5;

            while (Math.pow(count, 2) <= x) {
                if (x % count === 0 || x % (count + 2) === 0) return false;
                count += 6;
            }

            return true;
        };
    """,

    "isRotatedStr": """box.isRotatedStr = function isRotatedStr(x, y) {
            // x and y are strings;
            // return boolean
            // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
            // it will match y)

            return x.length === y.length && (x + x).indexOf(y) !== -1;
        };
    """,

    "matchingType": """box.matchingType = function matchingType(x, y) {
            return typeof x === typeof y;
        };
    """,

    "missingInteger": """box.missingInteger = function missingInteger(x) {
            // Given an array of positive integers, determine the missing integer
            // (ex. arr = [1,4,3,2,6] it should return 5)
            // (ex. arr = [1,2,3] should return 4 as there are no missing integer in between)

            if (x.length === 0) return 1;

            const len = x.length;
            let min = Number.MAX_VALUE;
            let max = 0;

            for (let i = 0; i < len; i++) {
                const v = x[i];
                if (min > v) min = v;
                if (max < v) max = v;
            }

            const found = {};
            let i = min;
            
            for (let j = 0; j < x.length; j++)
                found[x[j]] = 1;

            for (; i <= max; i++) if (!found[i]) return i;

            return i;
        };
    """,

    "monthToString": """box.monthToString = function monthToString(x) {
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];

            return months[x - 1];
        };
    """,

    "multiplierCount": """box.multiplierCount = function multiplierCount(x, y) {
            let m = 1;
            let n = 0;

            while (true) {
                if (y * m <= x) {
                m++;
                n++;
                } else return n;
            }
        };
    """,

    "numberOfCircles": """box.numberOfCircles = function numberOfCircles(x) {
            const map = { 0: 1, 6: 1, 8: 2, 9: 1 };

            let n = 0;
            const stringified = x.toString();
            const len = stringified.length;

            for (let i = 0; i < len; i++) {
                n += map[stringified[i]] || 0;
            }

            return n;
        };
    """,

    "numberRepresentation": """box.numberRepresentation = function numberRepresentation(arr) {
            const occurrences = {};
            const len = arr.length;

            for (let i = 0; i < len; i++) {
                const c = arr[i];
                occurrences[c] = occurrences[c] ? occurrences[c] + 1 : 1;
            }

            const sorted = Object.keys(occurrences).sort();
            let representation = "";

            for (let i = 0; i < sorted.length; i++) {
                const c = sorted[i];
                representation += String(occurrences[c]);
            }

            return Number(representation);
        };
    """,

    "removeAllSpaces": """box.removeAllSpaces = function removeAllSpaces(x) {
            let result = "";

            for (let i = 0; i < x.length; i++) {
                const c = x[i];
                if (c !== " ") result += c;
            }

            return result;
        };
    """,

    "removeDuplicates": """box.removeDuplicates = function removeDuplicates(x) {
            const unique = {};
            let result = "";

            for (let i = 0; i < x.length; i++) {
                const c = x[i];

                if (!unique[c]) {
                    unique[c] = 1;
                    result += c;
                }
            }

            return result;
        };
    """,

    "replaceSpaces": """box.replaceSpaces = function replaceSpaces(x) {
            let result = "";

            for (let i = 0; i < x.length; i++) {
                const c = x[i];
                result += c === " " ? "%20" : c;
            }

            return result;
        };
    """,

    "reverseAllWords": """box.reverseAllWords = function reverseAllWords(x) {
            return x
                .split(" ")
                .map(function (s) {return s.split("").reverse().join("")})
                .join(" ");
        };
    """,

    "reverseCase": """box.reverseCase = function reverseCase(x) {
            let result = "";

            for (let i = 0; i < x.length; i++) {
                const char = x[i];
                const lower = char.toLowerCase();
                result += char === lower ? char.toUpperCase() : lower;
            }

            return result;
        };
    """,

    "reverseString": """box.reverseString = function reverseString(x) {
            let result = "";
            let len = x.length;

            for (let i = 0; i < len; i++) {
                result += x[len - i - 1];
            }

            return result;
        };
    """,

    "romanToInt": """box.romanToInt = function romanToInt(x) {
            const map = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000,
            };

            let n = 0;

            for (let i = 0; i < x.length; i++) {
                const ci = map[x[i]];

                if (i + 1 < x.length) {
                const cip = map[x[i + 1]];

                if (ci >= cip) n += ci;
                else {
                    n = n + cip - ci;
                    i++;
                }
                } else n += ci;
            }

            return n;
        };
    """,

    "sortArrayDesc": """box.sortArrayDesc = function sortArrayDesc(x) {
            // x is an array of strings
            // return sorted array of strings in descending order
            // (ex. x=["b", "a", "z"], you should return ["z", "b", "a"])

            const sorted = x.sort();

            let result = [];
            let len = sorted.length;

            for (let i = 0; i < len; i++) {
                result.push(sorted[len - i - 1]);
            }

            return result;
            };
            """,

                "squareRoot": """
            box.squareRoot = function squareRoot(x) {
            return Math.sqrt(x);
        };
    """,

    "ticTacToeWinner": """box.ticTacToeWinner = function ticTacToeWinner(matrix) {
            // x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix
            // return 'x', 'o', or 'draw'
            // (ex. x=[["x", "o", "x"], ["o", "x", "o"], ["o", "o", "x"]],
            // you should return 'x' because 'x' player is the winner)

            const size = matrix.length;

            let score = {
                x: {
                row: {},
                column: {},
                dialog: 0,
                antiDialog: 0,
                },
                o: {
                row: {},
                column: {},
                dialog: 0,
                antiDialog: 0,
                },
            };

            const win = { x: false, o: false };

            const inc = function (obj, index) {
                obj[index] = obj[index] ? obj[index] + 1 : 1;
            };

            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                const c = matrix[i][j];
                const s = score[c];

                inc(s.row, i);
                inc(s.column, j);

                if (i === j) s.dialog++;
                if (i + j === size - 1) s.antiDialog++;

                if (
                    s.row[i] == size ||
                    s.column[j] == size ||
                    s.dialog == size ||
                    s.antiDialog == size
                )
                    win[c] = true;
                }
            }

            if (win.x === true && win.o === true) return "error";
            if (win.x) return "x";
            if (win.o) return "o";
            return "draw";
        };
    """,

    "twoArrayAvg": """box.twoArrayAvg = function twoArrayAvg(x, y) {
            const avg = function (arr) {
                let sum = 0;

                for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
                }

                return sum / (arr.length || 1);
            };

            return avg([avg(x), avg(y)]);
        };
    """,

    "validateIP": """box.validateIP = function validateIP(x) {
            const arr = x.split(".");
            if (arr.length !== 4) return false;

            try {
                return arr.every(function (str) {
                    if (!/^\d+$/.test(str)) return false;
                    const n = parseInt(str, 10);
                    return !isNaN(n) && n >= 0 && n <= 255 && n.toString() === str
                })
            } catch (error) {
                return false
            }
        };
    """
}


headers = {
    'cookie': '*******************************************',
}

params = (
    ('ch', '29'),
    ('acc', '5755'),
)

data = {
    'challengeSlug': 'toptal-js-2021',
    'email': '',
    'leaderboardName': 'ZenonRad',
    'isConfirmedToBeContacted': '1',
    'isTermsAndConditionsChecked': '1',
    'countryAlpha2': 'MG'
}

requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

s = requests.Session()
s.verify = False
response = s.post('https://speedcoding.toptal.com/webappApi/entry',
                  headers=headers, params=params, data=data)

try:
    entry_id = response.json()['data']['entry']['id']
    entry_key = response.json()['data']['entry']['entry_key']
except:
    print(response.text)
    exit(1)

url = f'https://speedcoding.toptal.com/webappApi/entry/{entry_id}/attemptTask'


def solve(data):
    if 'nextTask' in data:
        nextTask = data['nextTask']
    else:
        print("COMPLETED")
        exit(0)

    slug = nextTask['slug']
    code = solutions[slug]
    tests = nextTask['tests_json']

    print(f"\nslug: {slug}")

    prefix = f"box.{slug} = "
    js_func = code[len(prefix):]
    py_func = js2py.eval_js(js_func)

    for k, v in tests.items():
        args = v['args']
        result = py_func(*args)

        if(isinstance(result, js2py.base.JsObjectWrapper)):
            tests[k] = list(result)
        else:
            tests[k] = result

    payload = {}

    payload['entry_key'] = entry_key
    payload['attempt_id'] = data['attemptId']
    payload['tests_json'] = json.dumps(tests)
    payload['code'] = code

    response = s.post(url, headers=headers, params=params, data=payload)

    print(f"totalPoints: {response.json()['data']['totalPoints']}")

    if(not response.json()['data']['isSuccess']):
        print(f'===> Skipping {slug}')

        skip_data = {}

        skip_data['entry_key'] = entry_key
        skip_data['attempt_id'] = response.json()['data']['attemptId']
        skip_data['skip_direction'] = 'forward'

        response = s.post(
            f'https://speedcoding.toptal.com/webappApi/entry/{entry_id}/skipTask', headers=headers, params=params, data=skip_data)

    solve(response.json()['data'])


solve(response.json()['data'])
