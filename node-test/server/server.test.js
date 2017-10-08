const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should terurn hello world', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .expect(200)
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return my user obect', (done) => {
            request(app)
                .get('/users')
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Andrew',
                        age: 25
                    });
                })
                .expect(200)
                .end(done);
        });
    });
});
