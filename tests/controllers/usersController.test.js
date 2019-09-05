import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

// import mockUser from '../mockData/User';

chai.use(chaiHttp);
chai.should();

describe('GET </api/v1/users>', () => {
    const path = '/api/v1/users';

    it('Get a list of all users', (done) => {
        chai.request(app).get(path)
            .end((err, res) => {
                assert.typeOf(res.body, 'object');
                res.body.should.have.property('data');
                assert.typeOf(res.body.data, 'object');
                done();
            });
    });
});
