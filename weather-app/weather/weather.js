const request = require('request');


var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c13a6007c1affa32f0366a221a660cf8/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather');
        }
    })
}

module.exports.getWeather = getWeather;
