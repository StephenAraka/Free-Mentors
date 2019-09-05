import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
// import mockUser from '../mockData/signIn';
import createToken from '../../helpers/createNewToken';

chai.use(chaiHttp);
chai.should();
const mentorsPath = '/api/v1/mentors';
const userToken = createToken('henry@gmail.com');
// const adminToken = createToken('admin@gmail.com');

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
                data[0].should.have.property('role');            });
    });
});
