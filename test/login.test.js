import chai from "chai";
import chaiHttp from 'chai-http';
const should = chai.should();
const expect = chai.expect;
import app from "../app.js";

 chai.use(chaiHttp);
 chai.should()
describe('user API', function() {
    this.timeout(10000);
    let blogId = '';

    describe('POST /login', () => {
        it('user should log in', (done) => {
            
            chai.request(app)
                .post(`/api/login`)
                .send({email: 'vanessabewe@gmail.com',  password: '15march' })                  
                .then((err, res) => {
                    res.should.have.status(201);
                    expect(res.body.email).to.equal('vanessa');
                    expect(res.body.password).to.equal('15march');
                   
                    
                });
              done(); 
        });
       
    });
});