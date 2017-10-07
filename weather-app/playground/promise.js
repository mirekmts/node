var asyncAdd= (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguents must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, '12').then((res) => {
    console.log('Results:', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Results should be 50: ', res);
}).catch((errorMessage) => {
    console.log('ERRORMESSAGE', errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('hey. it worked!');
//         reject('Unable to fulfill promise');
//     }, 2500);
// });
//
// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('ERRORMESSAGE', errorMessage);
// });
