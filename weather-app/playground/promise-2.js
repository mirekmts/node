const request = require('request');

var geocodeAddress = (address) => {
    return new Promise(function(resolve, reject) {
        var encodedDDRESS = encodeURIComponent(address);

        request({
            url: `https://maps.google.com/maps/api/geocode/json?address=${encodedDDRESS}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('Unable to connnect to Google servers.');
            } else if (body.status === "ZERO_RESULTS") {
                reject('Unable to find this address');
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log('ERRORMESSAGE', errorMessage);
})
