'use strict';

var app = require('./server');
var should = require('should');
var request = require('supertest');
var assert = require('assert');

var url = 'localhost:3000';
var interval = 1024;


describe('api beersRoute-2', function(){

	it('vamos a probar el get a algo localhost:3000/api', function(done){
		request(app)
		.get('/api/beers')
		.expect('content-type', 'application/json; charset=utf-8')
		.end(function(err, res){
			console.log(err)
			//console.log(res)
			should.not.exist(err),
			assert(res.headers);
			setTimeout(done, interval);
		});
	});

	it('vamos a probar el post a localhost:3000/api/beers', function(done){
		request(app)
		.post('/api/beers')
		.send({
			_id: "5421ca2fe00000x240G9bd8F",
			name: "amstel",
			type: "holanda",
			quantity: 207
		}).expect(200)
		.end(function(err, res){
			if(err) throw err;
			assert(res.headers);
			setTimeout(done, interval);
		});
	});

	it('vamos a probar el get a localhost:3000/api/beers/:id', function(done){
		request(app)
		.get("/api/beers/5421ca2feff600d527c9bd8F")
		.expect(200)
		.end(function(err, res){
			if(err) throw err;
			assert(res.headers);
			setTimeout(done, interval);
		});
	});


	it('vamos a hacer una actualizacion sobre localhost:3000/api/beers/:id', function(done){
		request(app)
		.put('/api/beers/5421ca2feff600d527c9bd8F')
		.send({quantity:15})
		.expect(200)
		.end(function(err, res){
			if(err) throw err;
			assert(res.headers);
			setTimeout(done, interval);
		});		
	})

	it('vamos a borrar el delete en  localhost:3000/api/beers/:id', function(done){
		request(app)
		.del("/api/beers/5421ce3c3261aa03290577c8")
		.expect(200,  '{"message":"Beer removed from the locker!"}')
		.end(function(err, res){
			if(err) throw err;
			assert(res.headers);
			setTimeout(done, interval);
		});		
	})


});