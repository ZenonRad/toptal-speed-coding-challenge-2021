import json
from flask import Flask, request
from flask_cors import CORS
from urllib3.exceptions import InsecureRequestWarning
import requests

app = Flask(__name__)
cors = CORS(app)

params = (
    ('ch', '29'),
    ('acc', '5755'),
)

requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

s = requests.Session()
s.verify = False

data = {
    'challengeSlug': 'toptal-js-2021',
    'email': '',
    'leaderboardName': 'ZenonRad',
    'isConfirmedToBeContacted': '1',
    'isTermsAndConditionsChecked': '1',
    'countryAlpha2': 'MG'
}


@app.route("/", methods=['POST'])
def toptal_challenge():
    data = request.get_json()
    cookie = data["cookie"]

    headers = {
        'cookie': cookie,
    }

    response = s.post('https://speedcoding.toptal.com/webappApi/entry',
                      headers=headers, params=params, data=data)

    return response.json()
