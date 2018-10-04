var express = require('express');
var request = require('request');
var assert = require('assert');
var http = require('http');
var mocha = require('mocha');


it('Test Login ', function (done) {
    request.post('http://localhost:3000/users/login',
        { form: { email: 'shahakshat609@gmail.com', password: 'Axtshah14@' } },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

it('Test Logout', function (done) {
    request.post('http://localhost:3000/users/logout',
        { form: { email: 'shahakshat609@gmail.com' } },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

it('Test Assigned Projects', function (done) {
    request.get('http://localhost:3000/post/assignedprojects',
        { form: { email: 'shahakshat609@gmail.com' } },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

it('Test Open Projects', function (done) {
    request.get('http://localhost:3000/post/openprojects',
        { form: { email: 'shahakshat609@gmail.com' } },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

it('Test Self Projects', function (done) {
    request.get('http://localhost:3000/post/selfprojects',
        { form: { email: 'shahakshat609@gmail.com' } },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

it('Test Post Project', function (done) {
    request.post('http://localhost:3000/post/project_post',
        { form: { email: 'shahakshat609@gmail.com' },amount:2000 },
        function (error, response, body) {
        //    console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});

