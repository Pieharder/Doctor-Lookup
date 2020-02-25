# _Doctor Lookup_

#### _Epicodus 2020 C#/React Cohort Asynchrony and APIs Friday Project._

#### By _**Geoff Goetz** | 14 February 2020_

## Description

This project is was built with the purpose of taking user input in the form of medical complaint(s) and using an API of local area doctors, finds the closest and most appropriate medical professional to the user based on that input.

## Setup/Installation Requirements

* First, clone this repository to your desktop by navigating to the desktop in the Terminal ("cd desktop") and then entering "git clone _https://github.com/Pieharder/Doctor-Lookup_".
* Once the directory is cloned to your desktop, open the directory in the Terminal ("cd Doctor-Lookup").
* Next, in the terminal install all relevant node packages by typing "npm install".
* Request an <a href="https://developer.betterdoctor.com/">API Key</a> from the BetterDoctor API website.
* Create a .env file in the project directory by tpying "touch .env" in the terminal.
* After all the above is completed, open the directory in Visual Studio Code by entering the command "code ." in the Terminal.
* Access your newly created .env file in your Visual Studio Code and add the API key you created above in the following format "API_KEY =  Your Generated Key Here".
*Start your development server by typing "npm run start".

## Project Specifications

|   Behavior   |  Input  |  Output  |
|:------------:|:-------:|:--------:|
| Accept user input in the form of medical complaint and receive a list of local area specialists with contact information for treatment of that complaint. | COPD | Display list of Pulmonologists|
| Accept user input in the form of doctor by name and receive a list of local area doctors with the name inputted and their associated contact information. | John | Display a list of doctors with the first name John |
| If user input does not yield any results, displays a message to user stating this. | Samus Aran | Unfortunately there is nothing available in your area. |
| If an error occurs during making the API call, a message stating this is displayed to user. | Clicks submit | It seems something has gone wrong, please wait a moment and try again.|




## Technologies Used

* _Git_

* _JavaScript_

* _jQuery_

* _Node Package Manager_

* _Webpack_

* _Babel_

* _ESLint_

* _<a href="https://developer.betterdoctor.com/">API</a>_

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Geoff Goetz_**