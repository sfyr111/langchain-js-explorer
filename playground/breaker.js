"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkedin_1 = require("../thirdParties/linkedin");
(0, linkedin_1.scrapeLinkedinProfile)("https://www.linkedin.com/in/harrison-chase-961287118")
    .then(function (data) { return console.log(data); })
    .catch(function (err) { return console.log(err.message); });
