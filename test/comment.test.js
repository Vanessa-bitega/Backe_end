
import chai from "chai";
import chaiHttp from 'chai-http';
const should = chai.should();
const expect = chai.expect;
import app from "../app.js";

 chai.use(chaiHttp);
 chai.should()
describe('Comments API', function() {
    this.timeout(10000);
    let blogId = '';

    describe('POST /blog/:blogId/comment', () => {
        it('should create a new comment', (done) => {
            const blogId = "640a4c87951305cfc1085e80"
            chai.request(app)
                .post(`/api/blog/${blogId}/comment`)
                .send({name: 'vanessa',  commentBody: 'Look at this' })                  
                .then((err, res) => {
                    res.should.have.status(201);
                    expect(res.body.name).to.equal('vanessa');
                    expect(res.body.commentBody).to.equal('Look at this');
                    expect(res.body).to.have.property('_id');
                    commentId = res.body._id;
                    
                });
              done();   
        });
       
    });

    describe('GET /blog/:blogId/comments', function() {
        it('should return an array of all blog posts', function(done) {
          chai.request(app)
            .get('/api/blog/:blogId/comments')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.be.greaterThan(0);
              
            });
            done();
        });
        
      });
    







});