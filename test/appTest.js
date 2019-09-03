/* eslint-disable no-undef */
const chai = require('chai');
const { assert } = require('chai');
const app = require('../app');

describe('Users Tests', () => {
    it('should return the number of users', () => {
        chai.request(app).get('/api/v1/users')
            .end((err, res) => {
                assert.isArray(res, 'array');
            });
    });
});
