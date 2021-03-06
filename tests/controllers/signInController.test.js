import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { mockUser, mockAdmin } from '../mockData/signIn';

chai.use(chaiHttp);
chai.should();

describe('POST </auth/v1/signin>', () => {
    const path = '/api/v1/auth/signin';

    it('If email and password are provided, user should sign in successfuly', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[0])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 200);
                const { data } = res.body;
                if (data) {
                    data.should.have.property('token');
                    assert.typeOf(data.token, 'string');
                }
            });
    });

    it('If email is not provided, don\'t log in, notify user', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[1])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });

    it('If password is not provided, don\'t log in, notify user', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[2])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });

    it('If both email and password are not provided, don\'t log in, notify user', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[3])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });
});

describe('Admin Login - POST </auth/v1/admin/signin>', () => {
    const path = '/api/v1/auth/admin/signin';

    it('If email and password are provided, admin should sign in successfuly', () => {
        chai
            .request(app)
            .post(path)
            .send(mockAdmin[0])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 200);
                const { data } = res.body;
                if (data) {
                    data.should.have.property('token');
                    assert.typeOf(data.token, 'string');
                }
            });
    });

    it('If email is not provided, don\'t log in', () => {
        chai
            .request(app)
            .post(path)
            .send(mockAdmin[1])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });

    it('If password is not provided, don\'t log in, notify.', () => {
        chai
            .request(app)
            .post(path)
            .send(mockAdmin[2])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });

    it('If both email and password are not provided, don\'t log in, notify user', () => {
        chai
            .request(app)
            .post(path)
            .send(mockAdmin[3])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                assert.equal(res.body.status, 403);
                res.body.should.have.property('message');
            });
    });
});
