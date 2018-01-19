var expect = require('chai').expect;
var assert = require('chai').assert;
var request = require('request');
var user = require('../models/').user;

describe('Status and content', function () {
    describe('api/', function () {
        it('Main page content', function (done) {
            request('http://localhost:3000/api/', function (error, response, body) {
                expect(body).to.equal('{"message":"Welcome to the API!"}');
                done();
            });
        });

        it('Main page status', function (done) {
            request('http://localhost:3000/api/', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('About page', function () {
        it('status', function (done) {
            request('http://localhost:3000/about/', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

});