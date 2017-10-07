const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var gecodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(gecodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Inable to find that address');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude= response.data.results[0].geometry.location.lng;;
    var weatherUrl = `https://api.darksky.net/forecast/c13a6007c1affa32f0366a221a660cf8/${latitude},${longitude}`;

    console.log('RESPONSE', response.data.results[0].formatted_address);
    return axios.get(weatherUrl)
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect with server');
    } else {
        console.log(e.message);
    }
})
