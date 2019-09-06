import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import mockUser from '../mockData/signUp';

chai.use(chaiHttp);
chai.should();

describe('POST </auth/v1/signup>', () => {
    const path = '/api/v1/auth/signup';

    it('If all input is provided, user should be signed up successfuly', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[0])
            .end((err, res) => {
                const { user } = res.body.data;
                assert.typeOf(res.body, 'object');
                user.should.have.property('id');
                user.should.have.property('firstName');
                user.should.have.property('lastName');
                user.should.have.property('email');
                user.should.have.property('address');
                user.should.have.property('bio');
                user.should.have.property('occupation');
                user.should.have.property('expertise');
                assert.equal(res.status, 201);
            });
    });

    it('should not sign up if email already exists', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[1])
            .end((err, res) => {
                assert.equal(res.body.status, 401);
                res.body.should.have.property('message');
            });
    });

    it('should not sign up if no names or email are provided', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[0].email = '')
            .end((err, res) => {
                res.body.should.have.property('message');
            });
    });

    it('signed up user should receive a jwt token', () => {
        chai
            .request(app)
            .post(path)
            .send(mockUser[0])
            .end((err, res) => {
                const { data } = res.body;
                if (data) {
                    data.should.have.property('token');
                    assert.typeOf(data.token, 'string');
                }
            });
    });
});
