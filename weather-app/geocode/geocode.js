const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedDDRESS = encodeURIComponent(address);

    request({
        // url: 'https://mapogleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedDDRESS}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connnect to Google servers.');
        } else if (body.status === "ZERO_RESULTS") {
            callback('Unable to find this address');
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    });
}


module.exports = {
    geocodeAddress
}
