
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
        it('should return an array of all blog comments', function(done) {
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

      describe('DELETE /blog/:blogId/comment/:id', function() {
        it('should delete a specific blog comment', function(done) {
          const blogId = "640a1d5b4cfcf3ca59a8808e";
          const id = "640efad9b905d9cc9507caaf "
          chai.request(app)
            .delete(`/api//blog/${blogId}/comment/${id}`)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.body.message).to.equal('Blog post deleted successfully.');
              
            });
           done(); 
        });
      });
    







});