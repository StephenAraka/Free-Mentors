import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import mockUser from '../mockData/signIn';

chai.use(chaiHttp);
chai.should();
const mentorsPath = '/api/v1/mentors';

describe('GET ALL MENTORS', () => {

    it('A user should be able to get all mentors', () => {
        chai
            .request(app)
            .post(mentorsPath)
            .send(mockUser[0])
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                res.body.should.have.property('data');
            });
    });
});
