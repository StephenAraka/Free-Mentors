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
                const { newUser } = res.body.data;
                assert.typeOf(res.body, 'object');
                newUser.should.have.property('id');
                newUser.should.have.property('firstName');
                newUser.should.have.property('lastName');
                newUser.should.have.property('email');
                newUser.should.have.property('password');
                newUser.should.have.property('address');
                newUser.should.have.property('bio');
                newUser.should.have.property('occupation');
                newUser.should.have.property('expertise');
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
