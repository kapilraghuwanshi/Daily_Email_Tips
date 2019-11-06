'use strict';
const nodeOutlookMailer = require('nodejs-nodemailer-outlook');
const cron = require("node-cron");
let dataJson = require('./data');

let sentTimestamp = new Date();
//var idx = 0;

//cron.schedule('0 0 11 * *', () => { // shedule cron job
    nodeOutlookMailer.sendEmail({
        auth: {
            user: 'kabc@mail.com', // your userId
            pass: '@$^*!(90' // password
        },
        from: 'kabc@mail.com',
        to: 'kp@gmail.com, abc@outlook.com',
        subject: 'Daily Tid-Bits!!',
        html: `
    <h4>Hey guys,</h4>
    <h4>We've got something to learn today - </h4>
    <table style="border:3px #e567f4 solid; font-family: arial, sans-serif;width: 100%;padding: 8px;background:#fbe7fd;">
      <tr style="display:flex;border-bottom: double;">
        <th style="color:#5A61BF;margin:auto;font-size:23px">
        <span style="font-size: 23px;font-weight: 400;">$</span>
        <span style="font-size: 25px;font-weight: 400;">{</span>
            ${dataJson[0].question}
        <span style="font-size: 25px;font-weight: 400;">}</span>
        </th>
      </tr>  
      <tr>
        <td>
        <p style="padding:5px;">
        ${dataJson[0].answer}
        </p>
        </td>
      </tr>
      <tr>
        <td><b>Tags</b> - ${dataJson[0].tags}</td>
      </tr>
      <tr>
        <td style="text-align:right;">${sentTimestamp.toLocaleString()}</td>
      </tr>
    </table>
    <h4 style="color:brown;">Always walk through life as if you have something new to learn and you will.</h4>
    `,
        onError: (err) => console.log(err),
        onSuccess: (info) => console.log(`Yippee!! - Your daily Email sent on ${sentTimestamp.toLocaleString()} with response as - ${info.response}`)
    });
    //idx++;
//});