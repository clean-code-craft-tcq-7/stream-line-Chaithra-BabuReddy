const { bmsParameters } = require('./bms_parameters.model.js');

// generate random numbers between min and max values.
function getRandomIntValues(readingsCount, min, max) {
    var randomArray = [];
    while (readingsCount) {
        let val = Math.floor(Math.random() * (max - min) + min);
        randomArray.push(val);
        readingsCount--;
    }
    return randomArray;
}

/** 
*returns stream of battery parameters{temp,soc} values.
*@param dataCount : no of readings required
*@returns array of json object{temp,soc}
*/
function processDataStream(dataCount) {
    var stream = [];
    var temReadings = getRandomIntValues(dataCount, bmsParameters.temp.min, bmsParameters.temp.max);
    var socReadings = getRandomIntValues(dataCount, bmsParameters.soc.min, bmsParameters.soc.max);
    for (let i = 0; i < dataCount; i++) {
        stream.push({ temp: temReadings[i], soc: socReadings[i] });
    }
    consoleLogger(stream);
    return stream;
}

function consoleLogger(dataStream) {
    console.log(JSON.stringify(dataStream));
}

module.exports = { processDataStream };
