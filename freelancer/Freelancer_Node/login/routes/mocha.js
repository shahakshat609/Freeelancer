var express = require('express');
var request = require('request');
var assert = require('assert');
var http = require('http');
var mocha = require('mocha');


it('Test Login', function (done) {
    request.post('http://localhost:3001/login',
        { form: { email: 'test', password: 'test' } },
        function (error, response, body) {
            console.log(response.body);
            assert.equal(200, response.statusCode);
            done();
        });
});