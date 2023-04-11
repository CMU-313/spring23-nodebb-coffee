'use strict';

const helpers = require('../helpers');
const user = require('../../user');
const db = require('../../database');
const https = require('https');

const Career = module.exports;

Career.register = async (req, res) => {
    const userData = req.body;
    try {
        const userCareerData = {
            student_id: userData.student_id,
            major: userData.major,
            age: userData.age,
            gender: userData.gender,
            gpa: userData.gpa,
            extra_curricular: userData.extra_curricular,
            num_programming_languages: userData.num_programming_languages,
            num_past_internships: userData.num_past_internships,
        };

        const URL = "https://career-model-coffee.fly.dev/ask?studentData=" + encodeURI(JSON.stringify(userCareerData));

        // sourced from https://www.educative.io/answers/what-is-the-httpsget-method-in-node
        https.get(URL, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                console.log(data);
                console.log("Finished!");
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

        var prediction = Math.round(Math.random()); // TODO: Change this line to do call and retrieve actual candidate success prediction from the model instead of using a random number
        if (prediction == 1) {
            userCareerData.prediction = "Good worker";
        } else {
            userCareerData.prediction - "Bad worker";
        }
        
        await user.setCareerData(req.uid, userCareerData);
        db.sortedSetAdd('users:career', req.uid, req.uid);
        res.json({});
    } catch (err) {
        console.log(err);
        helpers.noScriptErrors(req, res, err.message, 400);
    }
};
