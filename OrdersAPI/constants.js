
'use strict';

let constants = {
    billApiHost:  process.env.BILLAPIHOST || "http://localhost",
    billApiPort:  process.env.BILLAPIPORT || "4000",
    logisticApiHost:  process.env.LOGISTICAPIHOST || "http://localhost",
    logisticApiPort:  process.env.LOGISTICAPIPORT || "5000",
};

module.exports = Object.freeze(constants); // freeze prevents changes by users