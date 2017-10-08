const utils = require('./utils');

const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    })
    
    it('should async  add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('should async  square a numbers', (done) => {
        utils.asyncSquare(4, (res) => {
            expect(res).toBe(16).toBeA('number');
            done();
        })
    });

    it('should power to number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });
})



// it('should expect some value', () => {
//     expect(13).toNotBe(12);
// });

it('should varyify first and last name are set', () => {
    var user ={location: 'Philadelphia', age: '25'};
    var res = utils.setName(user, 'Andrew Mead');

    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    });
});
