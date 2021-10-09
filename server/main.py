import json
from flask import Flask, request
from flask_cors import CORS
from urllib3.exceptions import InsecureRequestWarning
import requests

app = Flask(__name__)
cors = CORS(app)


@app.route("/", methods=['POST'])
def start():
    payload = request.get_json()
    cookie = payload["cookie"]

    headers = {
        'cookie': cookie,
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

    print("Fetching https://speedcoding.toptal.com/webappApi/entry")

    response = s.post('https://speedcoding.toptal.com/webappApi/entry',
                      headers=headers, params=params, data=data)

    return response.json()


@app.route("/submit", methods=['POST'])
def submit():
    payload = request.get_json()
    cookie = payload["cookie"]
    entryId = payload["entryId"]
    data = payload["payload"]

    headers = {
        'cookie': cookie,
    }

    params = (
        ('ch', '29'),
        ('acc', '5755'),
    )

    requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

    s = requests.Session()
    s.verify = False

    print("\n")
    print(
        f'Fetching https://speedcoding.toptal.com/webappApi/entry/{entryId}/attemptTask')

    print(data)

    response = s.post(f'https://speedcoding.toptal.com/webappApi/entry/{entryId}/attemptTask',
                      headers=headers, params=params, data=data)

    response_json = response.json()

    print(response_json)
    print("\n")

    return response_json
