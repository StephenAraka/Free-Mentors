import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import sessions from '../../dummyData/Sessions';
import createToken from '../../helpers/createNewToken';

chai.use(chaiHttp);
chai.should();
const sessionsPath = '/api/v1/sessions';
const userToken = createToken('henry@gmail.com');
const mentorToken = createToken('henry@gmail.com');

// const adminToken = createToken('admin@gmail.com');


describe('POST User creates a session', () => {
    it('creates a new session ', () => {
        chai
            .request(app)
            .post(sessionsPath)
            .send(sessions[0])
            .set('Authorization', `Bearer ${userToken}`)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.be.a('object');
                res.body.should.have.property('data');
            });
    });
});

describe('PATCH Accept a session', () => {
    it('should change status to accepted ', () => {
        chai
            .request(app)
            .patch(`${sessionsPath}/1/accept`)
            .set('Authorization', `Bearer ${mentorToken}`)
            .end((err, res) => {
                const { data } = res.body;
                res.should.have.status(200);
                res.body.should.have.be.a('object');
                assert.equal(data.status, 'accepted');
            });
    });
});

describe('PATCH Reject a session', () => {
    it('should change status to rejected ', () => {
        chai
            .request(app)
            .patch(`${sessionsPath}/1/reject`)
            .set('Authorization', `Bearer ${mentorToken}`)
            .end((err, res) => {
                const { data } = res.body;
                res.should.have.status(200);
                res.body.should.have.be.a('object');
                assert.equal(data.status, 'rejected');
            });
    });
});