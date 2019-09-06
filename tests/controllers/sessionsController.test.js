import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import sessions from '../../dummyData/Sessions';
import createToken from '../../helpers/createNewToken';

chai.use(chaiHttp);
chai.should();
const sessionsPath = '/api/v1/sessions';
const userToken = createToken('henry@gmail.com');
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
