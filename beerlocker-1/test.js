var should = require('should');
var mocha = require('mocha');
var app = require('./server');
var request = require('supertest');
var assert = require('assert');

const url = 'localhost:3000';
const interval = 1024;

var boom = function(){
	throw new Error('BOOM');
}


var header = function(res){
	this.heads = {
		'x-powered-by': 'Express',
		'content-type': 'text/html',
		'connection': 'close',
		'transfer-encoding': 'chunked' 
	}
}

header.prototype.update = function(header){
	for(key in header){
		this.heads[key] = header[key]
	}
}

header.prototype.isTrue = isTrue;

var isTrue = function(res, head){
	if (res[head]){
		throw new Error("Wrong value");
	} else {
		return false
	}
}


describe('api', function(){

	describe('get /index', function(){
		it('probando content-type json localhost:3000/api', function(done){
			request(app)
			.get('/api')
			.expect('content-type', /json/)
			.end(function(err, res){
				if(err) throw err;
				assert(res.headers);
				setTimeout(done, interval);
			});
		});

		it('probando res.json localhost:3000/api', function(done){
			request(app)
			.get("/api")
			.expect('content-Type', 'application/json; charset=utf-8')
			.expect(200, '{"message":"You are running dangerously low on beer!"}')
			.end(function(err, res){
				if(err) throw err;
				assert(res.headers);
				setTimeout(done, interval);
			});
		});

		it('probando /', function(done){
			request(app)
			.get("/")
			.expect('content-type', /text/)
			.expect(404, 'Cannot GET /\n')
			.end(function(err, res){
				if(err) throw err;
				assert(res.headers);
				setTimeout(done, interval);
			});
		});


	});
});
