import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
// import mockUser from '../mockData/signIn';
import createToken from '../../helpers/createNewToken';

chai.use(chaiHttp);
chai.should();
const mentorsPath = '/api/v1/mentors';
const usersPath = '/api/v1/users';

const userToken = createToken('henry@gmail.com');
const adminToken = createToken('admin@gmail.com');

describe('GET ALL MENTORS', () => {
    it('A user should be able to get all mentors', () => {
        chai
            .request(app)
            .get(mentorsPath)
            .set('Authorization', `Bearer ${userToken}`)
            .end((err, res) => {
                const { data } = res.body;
                assert.typeOf(res.body, 'object');
                assert.equal(res.status, 200);
                assert.typeOf(data, 'array');
                data[0].should.have.property('mentorId');
                data[0].should.have.property('firstName');
                data[0].should.have.property('lastName');
                data[0].should.have.property('email');
                data[0].should.have.property('password');
                data[0].should.have.property('address');
                data[0].should.have.property('bio');
                data[0].should.have.property('occupation');
                data[0].should.have.property('expertise');
                data[0].should.have.property('role');
            });
    });
});

<<<<<<< HEAD
describe('PATCH </api/v1/users/1> Admin should change a user to mentor', () => {
    it('It should check if user is available (check for ID)', () => {
        chai
            .request(app)
            .patch(`${usersPath}/99`)
            .set('Authorization', `Bearer ${adminToken}`)
            .end((err, res) => {
                res.should.have.status(404);
                assert.typeOf(res.body, 'object');
                res.body.should.have.property('message').eql('Not found user with the id of 99');
            });
    });

    it('It should change user to a mentor', () => {
        chai
            .request(app)
            .patch(`${usersPath}/1`)
            .set('Authorization', `Bearer ${adminToken}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.be.a('object');
                res.body.should.have.property('message').eql('User account changed to mentor');
=======
describe('GET specific mentor', () => {
    it('It should return the details of a specific mentor', () => {
        chai
            .request(app)
            .get(`${mentorsPath}/1`)
            .set('Authorization', `Bearer ${userToken}`)
            .end((err, res) => {
                const { data } = res.body;
                assert.typeOf(res.body, 'object');
                assert.equal(res.status, 200);
                assert.typeOf(data, 'object');
                data.should.have.property('mentorId');
                data.should.have.property('firstName');
                data.should.have.property('lastName');
                data.should.have.property('email');
                data.should.have.property('address');
                data.should.have.property('bio');
                data.should.have.property('occupation');
                data.should.have.property('expertise');
                data.should.have.property('role');
>>>>>>> develop
            });
    });
});
