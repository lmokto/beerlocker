'user strict';

var superagent = require('superagent');
var should = require('should');
var app = require('./server');
var request = require('supertest');
var assert = require('assert');
var dbURI = 'mongodb://localhost/beerlocker2';
var mongoose = require('mongoose');
var clearDB = require('mocha-mongoose')(dbURI, {noClear:true});
var expect = require('chai').expect;

var url = 'http://localhost:3000'
var interval = 1024;

var routes = {
	'getBeers': '/beers',
	'postBeers': '/beers',
	'getBeersId':'/beers/:beers_id',
	'postBeersId':'/beers/:beers_id',
	'getUsers':'/users',
	'postUsers':'/users',
}

describe('test beerlocker', function(){
    
    var agent = superagent.agent(app);
    
    before(function(done){
        if(mongoose.connection.db) return done();
        mongoose.connect(dbURI, function(err, res){
        	if(err)
        		console.log(err)
        	console.log(res)
        });
    });

	it('probando oauth connection', function(done){
		request(app)
		.get('/beers')
		.expect('content-type', 'text/html; charset=utf-8')
		.end(function(err, res){
			should.not.exist(err)
			assert(res.headers)
			setTimeout(done, interval);
		});

	});

	it('probando post para crear nuevo usuario', function(done){
		agent
		.post('http://localhost:3000/api/users')
		.send({username:"lolo4", password:"lola"})
		.end(function(err, res){
			should.not.exist(err)
			assert(res.headers)
			setTimeout(done, interval);
		});
	});


	it("probamos hacer un get para extraer los beers", function(done){
		agent
		.get("http://localhost:3000/api/beers")
		.auth('lolo4', 'lola')
		.end(function(err, res){
			should.not.exist(err)
			res.status.should.equal(200);
			assert(res.headers)
			setTimeout(done, interval);
		});
	});

	it("probamos hacer un get para extraer los beers", function(done){
		agent
		.post("http://localhost:3000/api/beers")
		.auth('lolo4', 'lola')
		.send({
			_id: "5421ca2fe00000x240G9bd8F",
			name: "amstel",
			type: "holanda",
			quantity: 207
		})
		.end(function(err, res){
			should.not.exist(err)
			res.status.should.equal(200);
			assert(res.headers)
			setTimeout(done, interval);
		});
	});

	it("probamos hacer un get para extraer los beers", function(done){
		agent
		.get("http://localhost:3000/api/beers")
		.auth('lolo4', 'lola')
		.end(function(err, res){
			should.not.exist(err)
			res.status.should.equal(200);
			assert(res.headers)
			setTimeout(done, interval);
		});
	});

});