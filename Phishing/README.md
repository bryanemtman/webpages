# Social Engineering Example of Phishing

I have created a mock up of the Google Sign in pages and workflow, compromising user credentials.
This is created as a proof of concept and is not meant to be used with malicious intent.
It is to be utilized as a teaching aid and with authorized concent.

### NOTE: This script is for educational and authorized testing only.

## Overview

- A look-alike of the Google sign in pages in English

- Runs on a node server and requires node-fetch

- Once credentials are submitted they are sent to a Google Sheets API and logged

- Then redirects to the actual Google sign in page, to cause confusion but not raise warnings

- Not made usable for small media devices, only for larger displays

Not completely functional due to using Github pages and not wanting to actually steal crendentials.

The link to the first sign in page ```/login/index.html``` can be accessed from [here](https://bryanemtman.github.io/webpages/Phishing/login/) and the next page ```/signin/index/html``` [here](https://bryanemtman.github.io/webpages/Phishing/signin/) but they are not routable and won't submit due to no server access.

## Workflow

1. User clicks on a phishing link and is taken to ```/login```
2. User enters their Google email credentials into the input box and submits
3. The browser attaches the given email and sets it to sessionStorage and is redirected to ```/signin```
4. User gives their Google password credentials and submits the form, sending the email and password to the API to be logged
5. The browser is then redirected to the real Google sign in page
