'use strict';

var expect, request, app;

function checkIndexHtml(Test, done) {
    Test.expect(200)
        .expect('Content-Type', /text\/html/)
        .expect(function(res) {
            expect(res.text).to.be.a('string');
            expect(res.text).to.have.string('<title>Docs<\/title>');
        })
        .end(function(err, res) {
            return err ? done(err) : done();
        });
}

expect = require('chai').expect;
request = require('supertest');
app = require('./server');

describe('GET /', function() {
    it('/ should respond with index.html', function(done) {
        checkIndexHtml(request(app).get('/'), done);
    });
});

describe('GET *', function() {
    it('/404.html should respond with 404.html', function(done) {
        request(app).get('/404.html')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .expect(function(res) {
                expect(res.text).to.be.a('string');
                expect(res.text).to.have.string('<title>Page Not Found :(<\/title>');
            })
            .end(function(err, res) {
                return err ? done(err) : done();
            });
    });

    it('/abcd should respond with index.html', function(done) {
        checkIndexHtml(request(app).get('/abcd'), done);
    });
});
