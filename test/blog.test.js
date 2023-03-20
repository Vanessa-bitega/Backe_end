
import chai from "chai";
import chaiHttp from 'chai-http';
const should = chai.should();
const expect = chai.expect;
import app from "../app.js";

 chai.use(chaiHttp);
 chai.should()
describe('Blog API', function() {
    this.timeout(10000);
    let blogId = '';

    // Test the creation of a new blog post
    describe('POST /blog/Create', () => {
        it('should create a new blog post', (done) => {
            chai.request(app)
                .post('/api/blog/Create')

                .send({title: 'Test Post',  body: 'This is a test post.'})                  
                .then((err, res) => {
                    res.should.have.status(201);
                    expect(res.body.title).to.equal('Test suppe');
                    expect(res.body.body).to.equal('This is a bread testing.');

                .send({title: 'Test Post',body: 'This is a test post.'})                  
                .then((err, res) => {
                    res.should.have.status(201);
                    expect(res.body.title).to.equal('Test me');
                    expect(res.body.body).to.equal('This is a test me.');

                    expect(res.body).to.have.property('_id');
                    blogId = res.body._id;
                    
                });
              done();   
        });
       
    });


  //Test the retrieval of all blog posts
  describe('GET /blogs', function() {
    it('should return an array of all blog posts', function(done) {
      chai.request(app)
        .get('/api/blogs')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.greaterThan(0);
          
        });
        done();
    });
    
  });

  //Test the retrieval of a specific blog post
  describe('GET /blog/{id}', function() {
    it('should return a specific blog post', function(done) {
      const blogId = "640a4c87951305cfc1085e80"
      chai.request(app)
        .get(`/api/blog/${blogId}`)
        .end(function(err, res) {
          res.should.have.status(200);
          expect(res.body._id).to.equal(blogId);
         
        });
     done();
    });
       
   });

//   //Test the update of a blog post
  describe('PUT /blog/update/:id', function() {
    it('should update a specific blog post', function(done) {
      const blogId = "640a4c87951305cfc1085e80";
      const newBlog = {
        title: "Updated Test Post",
        body: "Updated Test Post",

      }
      chai.request(app)
        .put(`/api/blog/update/${blogId}`)
        .send(newBlog)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.title).to.equal('Updated Test Post');
          expect(res.body.body).to.equal('Updated Test Post');
         
        });
       done(); 
    });
  });

 // Test the deletion of a blog post
  describe('DELETE /blog/delete/:id', function() {
    it('should delete a specific blog post', function(done) {
      const blogId = "640a4c87951305cfc1085e80";
      chai.request(app)
        .delete(`/api/blog/delete/${blogId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Blog post deleted successfully.');
          
        });
       done(); 
    });
  });

  });
