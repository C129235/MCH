
'use strict';

let constants = {
    billApiHost:  process.env.BILLAPIHOST || "http://localhost",
    billApiPort:  process.env.BILLAPIPORT || "4000",
};

module.exports = Object.freeze(constants); // freeze prevents changes by users