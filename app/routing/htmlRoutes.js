var express = require("express");
var path = require("path");

//Working directory
const DIR = __dirname;

module.exports = function (app) {


    app.get("/", (req, res) => {
        console.log('Request receieved');
        res.sendFile(path.join(DIR, "../public/home.html"));
    });


    app.get("/survey", (req, res) => {
        console.log('Request receieved');
        res.sendFile(path.join(DIR, "../public/survey.html"));
    });

    app.get('/*', (req, res) => {
        res.sendFile(path.join(DIR, "../public/home.html"));
    });

}